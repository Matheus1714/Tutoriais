from django.db import models

class Hello(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.FilePathField(path="/img")