from django.urls import path
from .views import (
    TutorApplicationCreateView,
    TutorApplicationStatusView,
    TutorApplicationStatusByEmailView,
    TutorApplicationListView,
    TutorApplicationDetailView
)

urlpatterns = [
    # Public endpoints
    path('apply/', TutorApplicationCreateView.as_view(), name='tutor_application_create'),
    path('status/<str:application_id>/', TutorApplicationStatusView.as_view(), name='tutor_application_status'),
    path('status-by-email/', TutorApplicationStatusByEmailView.as_view(), name='tutor_application_status_by_email'),
    
    # Admin endpoints
    path('admin/applications/', TutorApplicationListView.as_view(), name='tutor_application_list'),
    path('admin/applications/<int:pk>/', TutorApplicationDetailView.as_view(), name='tutor_application_detail'),
] 