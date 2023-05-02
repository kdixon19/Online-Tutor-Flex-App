from rest_framework import serializers
from .models import Function


class FunctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Function
        fields = ['id', 'function', 'answer', 'solution', 'tips', 'classification', 'user_id']
        depth = 1
