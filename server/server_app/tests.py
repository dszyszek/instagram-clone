from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Profile
from .serializers import ServerSerializer


class ProfileInfoTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_profile(name=''):
        Profile.objects.create(name=name)
    
    def setUp(self):
        self.create_profile('parrot')
        self.create_profile('rope')
        self.create_profile('shrek')
    

class GetProfileTest(ProfileInfoTest):

    def get_all_profiles(self):
        res = self.client.get(reverse('profiles'))

        expected = Profile.objects.all()
        serialized = ServerSerializer(expected, many=True)
        self.assertEqual(res.data, serialized.data)
        self.assertEqual(res.status_code, status.HTTP_200_OK)