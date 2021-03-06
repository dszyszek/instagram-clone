from rest_framework import serializers
from .models import Profile, Post

class ProfileSerializer(serializers.ModelSerializer):
    class Meta():
        model = Profile
        fields = ('profile_img', 'name', 'images_source', 'pub_date', 'likes', 'nick', 'observers', 'observed')

class PostSerializer(serializers.ModelSerializer):
    class Meta():
        model = Post
        fields = ('profile_img', 'name', 'image', 'pub_date', 'likes', 'nick')
