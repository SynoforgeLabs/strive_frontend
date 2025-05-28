from django.contrib import admin
from .models import TutorApplication, ApplicationStatusUpdate

@admin.register(TutorApplication)
class TutorApplicationAdmin(admin.ModelAdmin):
    list_display = ['application_id', 'full_name', 'email', 'status', 'atar', 'submitted_at']
    list_filter = ['status', 'year12_state', 'current_state', 'submitted_at', 'has_working_with_children_check']
    search_fields = ['full_name', 'email', 'application_id', 'phone']
    readonly_fields = ['application_id', 'submitted_at', 'updated_at']
    
    fieldsets = (
        ('Application Info', {
            'fields': ('application_id', 'status', 'submitted_at', 'updated_at')
        }),
        ('Personal Information', {
            'fields': ('full_name', 'phone', 'email')
        }),
        ('Education Background', {
            'fields': ('current_study', 'year12_state', 'year12_completion_year', 'current_state', 'atar')
        }),
        ('Availability & Commitment', {
            'fields': ('can_commit_3_hours', 'can_commit_1_year', 'can_tutor_most_weeks', 'can_tutor_groups')
        }),
        ('Tutoring Details', {
            'fields': ('subjects_to_tutor', 'has_working_with_children_check', 'motivation')
        }),
        ('File Uploads', {
            'fields': ('video_submission', 'resume')
        }),
        ('Admin Notes', {
            'fields': ('admin_notes', 'reviewer', 'review_date')
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if change:  # If updating existing application
            old_obj = TutorApplication.objects.get(pk=obj.pk)
            if old_obj.status != obj.status:
                # Create status update record
                ApplicationStatusUpdate.objects.create(
                    application=obj,
                    old_status=old_obj.status,
                    new_status=obj.status,
                    updated_by=request.user,
                    notes=f"Status updated via admin interface"
                )
        super().save_model(request, obj, form, change)

@admin.register(ApplicationStatusUpdate)
class ApplicationStatusUpdateAdmin(admin.ModelAdmin):
    list_display = ['application', 'old_status', 'new_status', 'updated_by', 'updated_at']
    list_filter = ['old_status', 'new_status', 'updated_at']
    search_fields = ['application__full_name', 'application__email', 'notes']
    readonly_fields = ['updated_at']
