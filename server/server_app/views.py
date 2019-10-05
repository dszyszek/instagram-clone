from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
import datetime
import random
import namesgenerator
import json

from .models import Profile, Post
from .serializers import ProfileSerializer, PostSerializer
from .utils.scrape_images import scrape_images


class Index(APIView):
    def get(self, req):
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)


class ProfilesView(generics.ListAPIView):
    lookup_url_kwarg = 'profile_name'
    serializer_class = ProfileSerializer

    def get_queryset(self):
        parameter_from_url = self.kwargs[self.lookup_url_kwarg]
        pub_date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        likes = random.randint(0, 200)
        nick = namesgenerator.get_random_name()

        try:
            if Profile.objects.filter(name=parameter_from_url).exists():
                queryset = Profile.objects.filter(name=parameter_from_url).values()
            else:
                raise Profile.DoesNotExist

        except Profile.DoesNotExist:
            new_profile_urls = scrape_images(parameter_from_url)
            new_profile_urls_json = json.dumps(scrape_images(parameter_from_url))
            new_profile = Profile(name=parameter_from_url, images_source=new_profile_urls_json, pub_date=pub_date, likes=likes, nick=nick)
            
            new_post = Post(profile_img=new_profile_urls[0], name=parameter_from_url, image=new_profile_urls[-1], pub_date=pub_date, likes=likes, nick=nick)

            new_profile.save()
            new_post.save()

            queryset = Profile.objects.filter(name=parameter_from_url).values()
            
        return queryset


