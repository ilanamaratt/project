from django.contrib import admin
from .models import Users, Managers, Products, Survey, Shop, Sales
# Register your models here.
admin.site.register(Users)
admin.site.register(Managers)
admin.site.register(Products)
admin.site.register(Survey)
admin.site.register(Shop)
admin.site.register(Sales)