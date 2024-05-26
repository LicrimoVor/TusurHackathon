from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, AbstractUser


User = get_user_model()


class Profile(models.Model):
    middle_name = models.CharField(max_length=30, blank=True, null=True)
    photo = models.ImageField(upload_to='photos/', blank=True, null=True)
    user = models.OneToOneField(User, models.CASCADE)
