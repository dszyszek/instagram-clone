from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta():
        model = Profile
        fields = ('name', 'images_source', 'pub_date', 'likes', 'nick')
