from django.shortcuts import render
from hello_world.models import Hello

def hello_world(request):
    return render(request, 'hello_world.html',{})
def hello_index(request):
    hello = Hello.objects.all()
    context = {
        'hello': hello
    }
    return render(request, 'hello_index.html', context)
def hello_detail(request, pk):
    hello = Hello.objects.get(pk=pk)
    context = {
        'hello': hello
    }
    return render(request, 'hello_detail.html', context)