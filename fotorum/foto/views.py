from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseBadRequest
from foto.models import *
# Create your views here.
def index(request):
    # Получаем все объекты Photo из базы данных, отсортированные по времени создания
    photos = Photo.objects.all().order_by('-created_at')
    return render(request, 'feed.html', {'photos': photos})

def search(request):
    query = request.GET.get('query')
    # Добавьте вашу логику поиска
    return render(request, 'feed.html')



def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')  # Перенаправляем на главную страницу после успешного входа
    return render(request, 'feed.html')

def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')  # Перенаправляем на страницу входа после успешной регистрации
    else:
        form = UserCreationForm()
    return render(request, 'feed.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('index')  # Перенаправляем на главную страницу после разлогинивания


@login_required
def upload_image(request):
    if request.method == 'POST' and request.FILES.get('image'):
        image = request.FILES['image']
        # Получаем текущего пользователя
        user = request.user
        # Создаем экземпляр модели Photo и заполняем его атрибуты
        photo = Photo(image=image, user=user)
        # Сохраняем объект в базе данных
        photo.save()
        return redirect('index')  # Перенаправляем на страницу ленты после загрузки
    else:
        return HttpResponseBadRequest('Invalid request method or no image provided')
