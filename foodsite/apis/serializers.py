from rest_framework import serializers, fields
from .models import Food
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
        class Meta:
                model = User
                fields = ['id', 'username', 'password', 'email']
                extra_kwargs = {'password': {'write_only': True}}

class FoodSerializer(serializers.ModelSerializer):
        
        # date = fields.DateField(input_formats=['%Y-%m-%d'])

        class Meta:
                model = Food
                fields = ['name', 'date', 'user', 'carb', 'fat', 'protein', 'calorie']