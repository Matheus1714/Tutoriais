from django.shortcuts import render, redirect
from .models import Fan
from .forms import FanForm

def list_fans(request):
    fans = Fan.objects.all()
    context = {
        'fans':fans
    }
    return render(request,'fans.html', context)

def create_fan(request):
    form = FanForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect(list_fans)
    context={
        'form':form
    }
    return render(request,'fans-form.html',context)

def update_fan(request, id):
    fan = Fan.objects.get(id=id)
    form = FanForm(request.POST or None, instance=fan)
    if form.is_valid():
        form.save()
        return redirect('list_fans')
    context={
        'form':form,
        'fan':fan
    }
    return render(request,'fans-form.html', context)

def delete_fan(request, id):
    fan = Fan.objects.get(id=id)
    if request.method == 'POST':
        fan.delete()
        return redirect('list_fans')
    context = {
        'fan':fan
    }
    return render(request,'fan-delete-confirm.html',context)
