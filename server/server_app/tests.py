import json
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Profile
from .serializers import ProfileSerializer

from .utils.scrape_images import scrape_images

class ProfileInfoTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_profile(name=''):
        images_source = json.dumps(scrape_images(name))
        Profile.objects.create(name=name, images_source=images_source)
    
    def setUp(self):
        self.create_profile('parrot')
    

    def test_get_parrot_profile_ok(self):
        res = self.client.get(reverse('ProfilesView', kwargs={'profile_name': 'parrot'}))

        expected = Profile.objects.filter(name='parrot').values()
        serialized = ProfileSerializer(expected, many=True)
        self.assertEqual(res.data, serialized.data)
        self.assertEqual(res.status_code, status.HTTP_200_OK)

