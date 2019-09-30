from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from .utils.scrape_images import scrape_images

class ProfilesView(generics.ListAPIView):
    lookup_url_kwarg = 'profile_name'
    serializer_class = ProfileSerializer


    def get_queryset(self):
        parameter_from_url = self.kwargs[self.lookup_url_kwarg]

        try:
            if Profile.objects.filter(name=parameter_from_url).exists():
                queryset = Profile.objects.filter(name=parameter_from_url).values()
            else:
                raise Profile.DoesNotExist

        except Profile.DoesNotExist:
            new_profile_urls = scrape_images(parameter_from_url)
            new_profile = Profile(name=parameter_from_url, images_source=new_profile_urls)
            new_profile.save()

            queryset = Profile.objects.filter(name=parameter_from_url).values()
            
        return queryset
