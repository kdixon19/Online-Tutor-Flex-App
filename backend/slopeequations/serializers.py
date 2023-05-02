from rest_framework import serializers
from .models import SlopeEquation


class SlopeEquationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SlopeEquation
        fields = ['id', 'function', 'answer', 'solution', 'tips', 'user_id']
        depth = 1
