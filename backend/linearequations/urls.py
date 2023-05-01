from django.urls import path, include
from linearequations import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_linearequations),
    path('all/', views.get_all_linearequations),
]
