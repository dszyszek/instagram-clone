from django.urls import path
from . import views

# app_name = 'server_app'

urlpatterns = [
    path('<slug:profile_name>', views.ProfilesView.as_view(), name='ProfilesView')
]
