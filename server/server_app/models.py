from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=200)
    images_source = models.TextField(null=True)

    def __str__(self):
        return self.name