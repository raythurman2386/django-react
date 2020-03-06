from django.urls import path, include
from .api import Registration, Login, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', Registration.as_view()),
    path('api/auth/login', Login.as_view()),
    path('api/auth/user', UserAPI.as_view()),
]
