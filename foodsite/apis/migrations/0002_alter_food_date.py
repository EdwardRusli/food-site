# Generated by Django 5.0.1 on 2024-01-05 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='date',
            field=models.DateField(blank=True),
        ),
    ]
