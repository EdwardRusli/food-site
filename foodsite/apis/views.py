from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
import json
from datetime import datetime

from .models import Food
from .serializers import UserSerializer, FoodSerializer

# Authentication


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    print("login attempted")

    user = authenticate(username=username, password=password)
    print(user)
    if user:
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        print(request.user.is_authenticated)
        return Response({'token': token.key})
    else:
        return Response({'error': 'Invalid credentials'})


@api_view(['GET'])
def user_logout(request):
    print(request)
    logout(request)
    return Response({'message': 'Successfully logged out'})

# Create food entry


@api_view(['POST'])
def add_food(request):

    if not 'date' in request.data:
        request.data['date'] = f"{datetime.now().year}-{datetime.now().month}-{datetime.now().day}"

    if request.user.is_authenticated:
        food = FoodSerializer(data=request.data)
        if food.is_valid():
            food.save(user=request.user)
            return Response(food.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)


# Test view
@api_view(['GET'])
def all_foods(request):
    foods = Food.objects.all()
    food_serializer = FoodSerializer(foods, many=True)
    return Response(food_serializer.data)

# Get foods of user logged in


@api_view(['GET'])
def get_user_food_history(request):
    if request.user.is_authenticated:
        foods = Food.objects.filter(user=request.user)
        foods = serializers.serialize('json', foods)
        foods = json.loads(foods)
        return Response(foods)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)
