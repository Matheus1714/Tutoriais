from django.db import models

# Create your models here.
class Fan(models.Model):
    name = models.CharField(max_length=100)
    sex = models.CharField(max_length=100)
    team = models.CharField(max_length=100)

    def __str__(self):
        return self.name
