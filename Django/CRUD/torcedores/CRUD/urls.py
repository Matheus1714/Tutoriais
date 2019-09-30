from django.urls import path
from .views import create_fan, update_fan, delete_fan, list_fans

urlpatterns = [
    path('',list_fans, name='list_fans'),
    path('new', create_fan, name='create_fan'),
    path('update/<int:id>/',update_fan, name='update_fan'),
    path('delete/<int:id>/',delete_fan, name='delete_fan'),
]