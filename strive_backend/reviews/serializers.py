from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    # Format the date to match frontend expectations (YYYY/M/DD)
    date = serializers.SerializerMethodField()
    reviewText = serializers.CharField(source='review_text', read_only=True)
    
    class Meta:
        model = Review
        fields = ['id', 'name', 'date', 'rating', 'reviewText', 'platform']
    
    def get_date(self, obj):
        # Format date as YYYY/M/DD to match frontend expectations
        return obj.review_date.strftime('%Y/%m/%d').replace('/0', '/') 