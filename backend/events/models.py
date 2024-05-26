from django.db import models
from django.contrib.auth import get_user_model
from groups.models import Group

User = get_user_model()


class Event(models.Model):
    # Поле для названия мероприятия
    name = models.CharField(max_length=255)
    # Поле для даты мероприятия, может быть пустым
    date = models.DateTimeField(blank=True, null=True)
    # Поле для логотипа мероприятия
    logo = models.ImageField(upload_to='event_logos/', blank=True, null=True)
    # Поле для краткого описания мероприятия
    short_description = models.TextField(max_length=500)
    # Поле для подробного описания мероприятия
    detailed_description = models.TextField()
    # Поле для ссылки на группу, к которой относится мероприятие
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='events')
    # Поле для ссылки на создателя мероприятия
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_events')
