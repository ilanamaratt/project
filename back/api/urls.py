from django.contrib import admin
from django.urls import path
from api.views import ProductsView, SalesView,shop, survey

urlpatterns = [
    path('menu/',ProductsView.as_view()),
    path('sale/',SalesView.as_view()),
    path('shop/',shop),
    path('login/',ProductsView.as_view()),
    path('survey/',survey)
]