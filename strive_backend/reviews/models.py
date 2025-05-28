from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Review(models.Model):
    PLATFORM_CHOICES = [
        ('trustpilot', 'Trustpilot'),
        ('google', 'Google'),
    ]
    
    # Basic review information
    name = models.CharField(max_length=255, help_text="Reviewer's name")
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        help_text="Rating from 1 to 5 stars"
    )
    review_text = models.TextField(help_text="The review content")
    platform = models.CharField(
        max_length=20, 
        choices=PLATFORM_CHOICES, 
        default='trustpilot',
        help_text="Platform where the review was posted"
    )
    
    # Timestamps
    review_date = models.DateField(help_text="Date when the review was posted")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Admin controls
    is_active = models.BooleanField(default=True, help_text="Whether this review should be displayed")
    display_order = models.IntegerField(default=0, help_text="Order for displaying reviews (lower numbers first)")
    
    class Meta:
        ordering = ['display_order', '-review_date']
        verbose_name = "Review"
        verbose_name_plural = "Reviews"
    
    def __str__(self):
        return f"{self.name} - {self.rating} stars ({self.platform})"
