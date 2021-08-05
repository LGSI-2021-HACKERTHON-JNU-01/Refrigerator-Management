from django.db import models

# Create your models here.

class Data(models.Model):
  name = models.TextField()
  number = models.IntegerField()
  expiredDate = models.DateTimeField()

  def __str__(self):
    return self.name
