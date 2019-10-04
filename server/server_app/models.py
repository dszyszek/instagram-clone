from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=200)
    images_source = models.TextField(null=True)
    pub_date = models.DateField(default=None)
    likes = models.IntegerField(default=None)

    def __str__(self):
        return self.name