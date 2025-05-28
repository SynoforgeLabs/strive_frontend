from rest_framework import serializers
from .models import TutorApplication, ApplicationStatusUpdate

class TutorApplicationSerializer(serializers.ModelSerializer):
    application_id = serializers.CharField(read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    
    class Meta:
        model = TutorApplication
        fields = [
            'id', 'application_id', 'full_name', 'phone', 'email',
            'current_study', 'year12_state', 'year12_completion_year', 
            'current_state', 'atar', 'can_commit_3_hours', 'can_commit_1_year',
            'can_tutor_most_weeks', 'can_tutor_groups', 'subjects_to_tutor',
            'has_working_with_children_check', 'motivation', 'video_submission',
            'resume', 'status', 'status_display', 'submitted_at', 'updated_at'
        ]
        read_only_fields = ['id', 'application_id', 'submitted_at', 'updated_at', 'status']
    
    def validate_atar(self, value):
        if value < 97:
            raise serializers.ValidationError("ATAR must be 97 or above.")
        return value
    
    def validate_email(self, value):
        # Check if email already exists in applications
        if TutorApplication.objects.filter(email=value).exists():
            raise serializers.ValidationError("An application with this email already exists.")
        return value

class TutorApplicationCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorApplication
        fields = [
            'full_name', 'phone', 'email', 'current_study', 'year12_state', 
            'year12_completion_year', 'current_state', 'atar', 'can_commit_3_hours', 
            'can_commit_1_year', 'can_tutor_most_weeks', 'can_tutor_groups', 
            'subjects_to_tutor', 'has_working_with_children_check', 'motivation',
            'video_submission', 'resume'
        ]
    
    def validate_atar(self, value):
        if value < 97:
            raise serializers.ValidationError("ATAR must be 97 or above.")
        return value
    
    def validate_email(self, value):
        if TutorApplication.objects.filter(email=value).exists():
            raise serializers.ValidationError("An application with this email already exists.")
        return value

class ApplicationStatusUpdateSerializer(serializers.ModelSerializer):
    updated_by_name = serializers.CharField(source='updated_by.username', read_only=True)
    
    class Meta:
        model = ApplicationStatusUpdate
        fields = ['id', 'old_status', 'new_status', 'updated_by_name', 'updated_at', 'notes']
        read_only_fields = ['id', 'updated_at', 'updated_by_name']

class TutorApplicationDetailSerializer(serializers.ModelSerializer):
    application_id = serializers.CharField(read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    status_updates = ApplicationStatusUpdateSerializer(many=True, read_only=True)
    
    class Meta:
        model = TutorApplication
        fields = [
            'id', 'application_id', 'full_name', 'phone', 'email',
            'current_study', 'year12_state', 'year12_completion_year', 
            'current_state', 'atar', 'can_commit_3_hours', 'can_commit_1_year',
            'can_tutor_most_weeks', 'can_tutor_groups', 'subjects_to_tutor',
            'has_working_with_children_check', 'motivation', 'video_submission',
            'resume', 'status', 'status_display', 'submitted_at', 'updated_at',
            'admin_notes', 'status_updates'
        ]
        read_only_fields = ['id', 'application_id', 'submitted_at', 'updated_at', 'status'] 