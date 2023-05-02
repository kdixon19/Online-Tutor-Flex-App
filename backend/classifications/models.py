from django.db import models
from authentication.models import User

# Create your models here.

class Classification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    classification = models.CharField(max_length=255)
