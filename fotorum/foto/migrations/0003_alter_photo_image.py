# Generated by Django 4.2.11 on 2024-03-17 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foto', '0002_remove_photo_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
    ]
