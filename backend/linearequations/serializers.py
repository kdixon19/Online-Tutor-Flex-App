from rest_framework import serializers
from .models import LinearEquation


class LinearEquationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinearEquation
        fields = ['id', 'function', 'answer', 'solution', 'tips', 'user_id']
        depth = 1
