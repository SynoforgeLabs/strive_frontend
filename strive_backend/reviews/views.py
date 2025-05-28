from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Review
from .serializers import ReviewSerializer

# Create your views here.

class ReviewListView(generics.ListAPIView):
    """
    API endpoint to get all active reviews for display on the frontend
    """
    serializer_class = ReviewSerializer
    permission_classes = [permissions.AllowAny]  # Public endpoint
    
    def get_queryset(self):
        # Only return active reviews, ordered by display_order and then by review_date
        return Review.objects.filter(is_active=True)
