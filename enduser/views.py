from http.client import responses
from django.shortcuts import render
from django.http import HttpResponse
from enduser import models
from rest_framework import generics
from . import serializer
# Create your views here.

def Start(request):
    return HttpResponse('Starting....')

def index(request):
    return HttpResponse('<h1>Home Page</h1><p>This is a statement</p>')

def homepage(request):
    return render(request,'../static/index.html')

def home(request):
    customer=1000
    param1 = {
        'name': models.Customers.objects.get(customerno=customer)
    }
    if len(param1)<=0:
        return render(request,'login.html')
    else:
        return render(request,'index.html',param1)
    

def login(request):
    return render(request,'about.html')

def dashboard(request):
    username = "Monty Phahlane"
    return render(request,'home.html',{'loggedinname':username})

def landing(request):
    loggedinuser = {
        'user': models.Customers.objects.get(customerno=1000)
    }
    return render(request,'dashboard.html',loggedinuser)


def customers(request):
    customer_list = models.Customers.objects.all() 
    return render(request, 'customers.html', {'customer_list': customer_list})

def customer(request, customerno):
    customer = models.Customers.objects.get(customerno=customerno) 
    cus =models.Customers(name='Me',lastname='You',cellno=customerno,email='me@you.com')
    models.Customers.save(cus)
    return render(request, 'customer.html', {'customer': customer})


class CustomerListView(generics.ListCreateAPIView):
    queryset = models.Customers.objects.all()
    serializer_class = serializer.CustomersSerializer


    
class ProductsListView(generics.ListCreateAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializer.ProductsSerializer

class ProductView(generics.ListCreateAPIView):

    serializer_class = serializer.ProductsSerializer
    def get_queryset(self):
        # Access the 'param' URL parameter using self.kwargs
        param = self.kwargs.get('param')

        # Filter the queryset based on the 'param' value
        queryset = models.Products.objects.get(idproducts=param)

        return queryset

    
class CartView(generics.ListCreateAPIView):
    queryset = models.Cart.objects.all()
    serializer_class = serializer.CartSerializer