from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404
from .models import TutorApplication, ApplicationStatusUpdate
from .serializers import (
    TutorApplicationSerializer, 
    TutorApplicationCreateSerializer,
    TutorApplicationDetailSerializer
)

# Create your views here.

class TutorApplicationCreateView(generics.CreateAPIView):
    queryset = TutorApplication.objects.all()
    serializer_class = TutorApplicationCreateSerializer
    permission_classes = [permissions.AllowAny]  # Allow anonymous submissions
    parser_classes = [MultiPartParser, FormParser]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            application = serializer.save()
            return Response({
                'application_id': application.application_id,
                'message': 'Thank you for expressing interest in joining our tutoring team at Strive Academics! We will review your application and contact you regarding the next steps.',
                'status': 'success'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TutorApplicationStatusView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, application_id):
        """Get application status by application ID"""
        try:
            application = TutorApplication.objects.get(application_id=application_id)
            serializer = TutorApplicationDetailSerializer(application)
            return Response(serializer.data)
        except TutorApplication.DoesNotExist:
            return Response({
                'error': 'Application not found',
                'message': 'No application found with this ID. Please check your application ID and try again.'
            }, status=status.HTTP_404_NOT_FOUND)

class TutorApplicationStatusByEmailView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        """Get application status by email"""
        email = request.data.get('email')
        if not email:
            return Response({
                'error': 'Email is required'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            application = TutorApplication.objects.get(email=email)
            serializer = TutorApplicationDetailSerializer(application)
            return Response(serializer.data)
        except TutorApplication.DoesNotExist:
            return Response({
                'error': 'Application not found',
                'message': 'No application found with this email address.'
            }, status=status.HTTP_404_NOT_FOUND)

# Admin views (require authentication)
class TutorApplicationListView(generics.ListAPIView):
    queryset = TutorApplication.objects.all()
    serializer_class = TutorApplicationSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    
    def get_queryset(self):
        queryset = TutorApplication.objects.all()
        status_filter = self.request.query_params.get('status')
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        return queryset

class TutorApplicationDetailView(generics.RetrieveUpdateAPIView):
    queryset = TutorApplication.objects.all()
    serializer_class = TutorApplicationDetailSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    
    def update(self, request, *args, **kwargs):
        application = self.get_object()
        old_status = application.status
        
        # Update the application
        response = super().update(request, *args, **kwargs)
        
        # If status changed, create a status update record
        new_status = response.data.get('status')
        if old_status != new_status:
            ApplicationStatusUpdate.objects.create(
                application=application,
                old_status=old_status,
                new_status=new_status,
                updated_by=request.user,
                notes=request.data.get('status_change_notes', '')
            )
        
        return response
