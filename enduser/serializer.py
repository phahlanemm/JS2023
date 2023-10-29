from rest_framework import serializers
from .models import Customers
from .models import Products,Cart

class CustomersSerializer(serializers.ModelSerializer):

    class Meta:
        model=Customers
        fields ='__all__'

        
class ProductsSerializer(serializers.ModelSerializer):

    class Meta:
        model=Products
        fields ='__all__'


class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model=Cart
        fields ='__all__'