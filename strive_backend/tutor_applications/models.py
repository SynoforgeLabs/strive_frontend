from django.db import models
from django.contrib.auth.models import User

class TutorApplication(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending Review'),
        ('under_review', 'Under Review'),
        ('interview_scheduled', 'Interview Scheduled'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
    ]
    
    # Personal Information
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    
    # Education Background
    current_study = models.TextField()
    year12_state = models.CharField(max_length=100)
    year12_completion_year = models.IntegerField()
    current_state = models.CharField(max_length=100)
    atar = models.DecimalField(max_digits=5, decimal_places=2)
    
    # Availability & Commitment
    can_commit_3_hours = models.BooleanField()
    can_commit_1_year = models.BooleanField()
    can_tutor_most_weeks = models.BooleanField()
    can_tutor_groups = models.BooleanField()
    
    # Tutoring Subjects & Qualifications
    subjects_to_tutor = models.TextField()
    has_working_with_children_check = models.BooleanField()
    
    # Motivation
    motivation = models.TextField()
    
    # File uploads
    video_submission = models.FileField(upload_to='applications/videos/', null=True, blank=True)
    resume = models.FileField(upload_to='applications/resumes/', null=True, blank=True)
    
    # Application status and tracking
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    submitted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Admin notes
    admin_notes = models.TextField(blank=True, null=True)
    review_date = models.DateTimeField(null=True, blank=True)
    reviewer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='reviewed_applications')
    
    # Application tracking number
    application_id = models.CharField(max_length=20, unique=True, blank=True)
    
    class Meta:
        ordering = ['-submitted_at']
        
    def __str__(self):
        return f"{self.full_name} - {self.get_status_display()}"
    
    def save(self, *args, **kwargs):
        if not self.application_id:
            # Generate unique application ID
            import uuid
            self.application_id = f"SA{str(uuid.uuid4())[:8].upper()}"
        super().save(*args, **kwargs)

class ApplicationStatusUpdate(models.Model):
    application = models.ForeignKey(TutorApplication, on_delete=models.CASCADE, related_name='status_updates')
    old_status = models.CharField(max_length=20)
    new_status = models.CharField(max_length=20)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)
    
    class Meta:
        ordering = ['-updated_at']
        
    def __str__(self):
        return f"{self.application.full_name} - {self.old_status} to {self.new_status}"
