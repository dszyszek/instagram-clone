from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=500)
    images_source = models.TextField(null=True)
    pub_date = models.DateTimeField(default=None)
    likes = models.IntegerField(default=None)
    nick = models.CharField(max_length=200)
    profile_img = models.CharField(max_length=500)
    observers = models.IntegerField(default=None)
    observed = models.IntegerField(default=None)

    def __str__(self):
        return self.name


class Post(models.Model):
    profile_img = models.CharField(max_length=500)
    name = models.CharField(max_length=500)
    pub_date = models.DateTimeField(default=None)
    image = models.TextField(null=True)
    nick = models.CharField(max_length=200)
    likes = models.IntegerField(default=None)

    def __str__(self):
        return self.nick