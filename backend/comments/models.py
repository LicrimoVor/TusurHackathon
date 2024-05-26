from django.db import models
from django.contrib.auth import get_user_model
from events.models import Event

User = get_user_model()


# Create your models here.
class Comment(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()
    # Поле для временной метки создания комментария
    created_at = models.DateTimeField(auto_now_add=True)
    # Поле для временной метки обновления комментария
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.text[:20]