from django.urls import path
from . import views

urlpatterns = [
    path('hello_world',views.hello_world, name='hello_world'),
    path("index", views.hello_index, name="hello_index"),
    path("<int:pk>/", views.hello_detail, name="hello_detail"),
]