from rest_framework import serializers
from api.models import Products, Sales, Shop


class SurveySerializer(serializers.Serializer):
    order = serializers.CharField(max_length=100)
    comment = serializers.CharField(max_length=500)

class ShopSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=15)
    describtion = serializers.CharField(max_length=100)
    cost = serializers.CharField(max_length=15)
    image= serializers.CharField(max_length=100)

class ProductsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('name','describtion','cost','image')

class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sales
        fields = {'id', 'sale','describtion','managers'}