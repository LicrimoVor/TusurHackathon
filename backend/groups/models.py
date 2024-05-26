from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Group(models.Model):

    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='logos/', blank=True, null=True)
    short_description = models.TextField(max_length=500)
    detailed_description = models.TextField()
    # Поле для ссылки на создателя группы
    creator = models.OneToOneField(User, on_delete=models.CASCADE, related_name='created_groups')
    # Поле для связи многих ко многим с пользователями группы
    members = models.ManyToManyField(User, related_name='user_groups')
