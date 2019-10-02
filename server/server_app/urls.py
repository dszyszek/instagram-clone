from django.urls import path
from . import views

# app_name = 'server_app'

urlpatterns = [
    path('', views.Index.as_view(), name='Index'),
    path('<slug:profile_name>', views.ProfilesView.as_view(), name='ProfilesView')
]
