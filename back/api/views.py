from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Products, Shop, Sales, Survey
from .serializers import ProductsListSerializer, ShopSerializer, SalesSerializer, SurveySerializer
# Create your views here.

class ProductsView(APIView):
    def get(self, request):
        products = Products.objects.all()
        serializer = ProductsListSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductsListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def shop(request):
    if request.method == 'GET':
        shops = Shop.objects.all()
        serializer = ShopSerializer(shops, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ShopSerializer(instance=model, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    if request.method == 'DELETE':
        model.delete()
        return Response({'deleted': True})
    elif request.method == 'POST':
        serializer = ShopSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SalesView(APIView):
    def get(self, request):
        sale = Sales.objects.all()
        serializer = SalesSerializer(sale, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SalesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def survey(request):
    if request.method == 'GET':
        survey_list = Survey.objects.all()
        serializer = SurveySerializer(survey_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SurveySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

