from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('rest-auth/facebook/', views.FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', views.GoogleLogin.as_view(), name='google_login'),

]
