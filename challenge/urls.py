from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^select_pic/(?P<chal_or_not>[0-1])$', views.select_pic, name='select_pic'),
    url(r'^challenge/(?P<photobooth_id>.+)$', views.challenge, name='challenge'),
    url(r'^photo_mode/(?P<photobooth_id>.+)$', views.photo_mode, name='photo_mode'),

]