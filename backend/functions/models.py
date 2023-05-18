from django.db import models
from authentication.models import User
from classifications.models import Classification

# Create your models here.

class Function(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    problem = models.TextField()
    answer = models.CharField(max_length=100)
    solution = models.TextField()
    tips = models.TextField()
    classification = models.ForeignKey(Classification, on_delete=models.CASCADE)
