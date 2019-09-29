from django.urls import path

app_name = 'server_app'

urlpatterns = [
    path('', views.index, name='index'),
    path('profiles', views.profiles, name='profiles'),
]
