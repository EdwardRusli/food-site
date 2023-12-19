from django.db import models
from django.contrib.auth.models import User

class Food(models.Model):
    name = models.CharField(max_length=150)
    date = models.DateField(blank=True, editable=True)
    user = models.ForeignKey(User, blank=True, on_delete=models.CASCADE)

    carb = models.IntegerField()
    fat = models.IntegerField()
    protein = models.IntegerField()
    calorie = models.IntegerField()

    def __str__(self):
        return self.name