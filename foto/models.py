from django.db import models
from django.contrib.auth.models import User

class Photo(models.Model):
    image = models.ImageField(upload_to='')  # Поле для загрузки фото
    description = models.CharField(max_length=255, blank=True, null=True)  # Поле для описания фото
    created_at = models.DateTimeField(auto_now_add=True)  # Поле для времени создания (автоматически добавляется при создании объекта)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Ссылка на пользователя, который добавил объект
