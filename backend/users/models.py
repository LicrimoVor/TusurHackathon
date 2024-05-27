from django.db import models
from django.contrib.auth.models import AbstractUser

class UserProfile(AbstractUser):
    username = None #Требуется AbstractUser, заменил на email
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=165)
    surname = models.CharField(max_length=165)
    patronymic = models.CharField(max_length=165, null=True, blank=True)
    birth_date = models.DateField()
    password = models.CharField(max_length=128)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []