from django.urls import path
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('api/register/', views.register),
    path('api/login/', views.user_login),
    path('api/logout/', views.user_logout),

    path('api/all_foods', views.all_foods, name='all_foods'),
    path('api/get_user_food_history/', views.get_user_food_history,
         name='get_user_food_history'),
    path('api/add_food', views.add_food, name='add_food'),
]
