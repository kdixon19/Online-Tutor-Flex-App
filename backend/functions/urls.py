from django.urls import path, include
from functions import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_functions),
    path('all/', views.get_all_functions),
]
