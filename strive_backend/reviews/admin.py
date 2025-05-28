from django.contrib import admin
from .models import Review

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'rating', 'platform', 'review_date', 'is_active', 'display_order')
    list_filter = ('platform', 'rating', 'is_active', 'review_date')
    search_fields = ('name', 'review_text')
    list_editable = ('is_active', 'display_order')
    ordering = ('display_order', '-review_date')
    
    fieldsets = (
        ('Review Information', {
            'fields': ('name', 'rating', 'review_text', 'platform', 'review_date')
        }),
        ('Display Settings', {
            'fields': ('is_active', 'display_order'),
            'description': 'Control how this review is displayed on the website'
        }),
    )
    
    def get_queryset(self, request):
        return super().get_queryset(request)
    
    # Add some helpful methods
    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)
