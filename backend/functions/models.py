from django.db import models
from authentication.models import User
from classifications.models import Classification

# Create your models here.

class Function(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    function = models.CharField(max_length=30)
    answer = models.CharField(max_length=100)
    solution = models.CharField(max_length=300)
    tips = models.CharField(max_length=300)
    classification = models.ForeignKey(Classification, on_delete=models.CASCADE)
