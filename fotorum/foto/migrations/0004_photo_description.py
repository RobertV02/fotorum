# Generated by Django 4.2.11 on 2024-04-13 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foto', '0003_alter_photo_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='description',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]