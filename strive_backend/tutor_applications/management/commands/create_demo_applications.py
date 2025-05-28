from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from tutor_applications.models import TutorApplication, ApplicationStatusUpdate
from decimal import Decimal
import uuid

class Command(BaseCommand):
    help = 'Creates demo tutor applications for testing'

    def handle(self, *args, **options):
        # Create a demo admin user if it doesn't exist
        admin_user, created = User.objects.get_or_create(
            username='admin',
            defaults={
                'email': 'admin@striveacademics.com.au',
                'is_staff': True,
                'is_superuser': True
            }
        )
        if created:
            admin_user.set_password('admin123')
            admin_user.save()
            self.stdout.write(
                self.style.SUCCESS(f'Created admin user: admin/admin123')
            )

        # Demo applications data
        demo_applications = [
            {
                'full_name': 'Sarah Johnson',
                'phone': '0412345678',
                'email': 'sarah.johnson@example.com',
                'current_study': 'Bachelor of Medicine at University of Sydney',
                'year12_state': 'New South Wales',
                'year12_completion_year': 2022,
                'current_state': 'New South Wales',
                'atar': Decimal('99.50'),
                'can_commit_3_hours': True,
                'can_commit_1_year': True,
                'can_tutor_most_weeks': True,
                'can_tutor_groups': True,
                'subjects_to_tutor': 'Mathematics Advanced, Chemistry, Biology, Physics',
                'has_working_with_children_check': True,
                'motivation': 'I am passionate about helping students achieve their academic goals and have extensive experience in tutoring high school students.',
                'status': 'approved'
            },
            {
                'full_name': 'Michael Chen',
                'phone': '0423456789',
                'email': 'michael.chen@example.com',
                'current_study': 'Bachelor of Engineering (Software) at UNSW',
                'year12_state': 'New South Wales',
                'year12_completion_year': 2021,
                'current_state': 'New South Wales',
                'atar': Decimal('98.75'),
                'can_commit_3_hours': True,
                'can_commit_1_year': True,
                'can_tutor_most_weeks': True,
                'can_tutor_groups': True,
                'subjects_to_tutor': 'Mathematics Extension 1, Mathematics Extension 2, Physics, Software Design & Development',
                'has_working_with_children_check': False,
                'motivation': 'I want to share my knowledge and help students develop problem-solving skills in STEM subjects.',
                'status': 'under_review'
            },
            {
                'full_name': 'Emma Rodriguez',
                'phone': '0434567890',
                'email': 'emma.rodriguez@example.com',
                'current_study': 'Bachelor of Arts (English Literature) at University of Melbourne',
                'year12_state': 'Victoria',
                'year12_completion_year': 2023,
                'current_state': 'Victoria',
                'atar': Decimal('97.25'),
                'can_commit_3_hours': True,
                'can_commit_1_year': True,
                'can_tutor_most_weeks': True,
                'can_tutor_groups': True,
                'subjects_to_tutor': 'English Advanced, English Extension 1, Modern History, Geography',
                'has_working_with_children_check': False,
                'motivation': 'I have a strong background in humanities and want to help students improve their writing and analytical skills.',
                'status': 'pending'
            }
        ]

        created_count = 0
        for app_data in demo_applications:
            # Check if application with this email already exists
            if not TutorApplication.objects.filter(email=app_data['email']).exists():
                application = TutorApplication.objects.create(**app_data)
                
                # Create some status updates for demonstration
                if application.status == 'approved':
                    ApplicationStatusUpdate.objects.create(
                        application=application,
                        old_status='pending',
                        new_status='under_review',
                        updated_by=admin_user,
                        notes='Application moved to review stage'
                    )
                    ApplicationStatusUpdate.objects.create(
                        application=application,
                        old_status='under_review',
                        new_status='interview_scheduled',
                        updated_by=admin_user,
                        notes='Interview scheduled for next week'
                    )
                    ApplicationStatusUpdate.objects.create(
                        application=application,
                        old_status='interview_scheduled',
                        new_status='approved',
                        updated_by=admin_user,
                        notes='Interview successful. Welcome to the team!'
                    )
                elif application.status == 'under_review':
                    ApplicationStatusUpdate.objects.create(
                        application=application,
                        old_status='pending',
                        new_status='under_review',
                        updated_by=admin_user,
                        notes='Application under detailed review'
                    )
                
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'Created application for {application.full_name} - ID: {application.application_id}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Application for {app_data["email"]} already exists')
                )

        self.stdout.write(
            self.style.SUCCESS(f'Demo data creation complete. Created {created_count} new applications.')
        )