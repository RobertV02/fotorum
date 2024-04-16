from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import AnonymousUser
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseBadRequest
from foto.models import *
from django.urls import reverse
import re

# Create your views here.
def index(request):

    if request.method == 'POST':
        search_query = request.POST.get('search_query', '')
        photos = Photo.objects.filter(description__icontains=search_query)
    elif request.method == 'GET':  # Check for search query in GET as well
        search_query = request.GET.get('query', '')  # Access query from redirect in search()
        photos = Photo.objects.filter(description__icontains=search_query)
    else:
        photos = Photo.objects.all().order_by('-created_at')
    return render(request, 'main.html', {'photos': photos, 'search_query': search_query})

def upload(request):
    return render(request, 'upload.html', )
def auth(request):
    return render(request, 'auth.html', )

def search(request):
    if request.method == 'POST':
        query = request.GET.get('query')
        # Add your search logic here using the `query` variable
        return redirect('index')  # Redirect to the search results page

    # Handle potential errors gracefully, e.g., for invalid GET requests
    return render(request, 'error.html', {'message': 'Invalid search request'})


def upload_photo(request):
    error_message = None  # Переменная для хранения текста ошибки
    if request.method == 'POST':
        image = request.FILES.get('image')
        description = request.POST.get('description')
        if isinstance(request.user, AnonymousUser):
            error_message = 'Для загрузки изображения нужно авторизоваться. '
            return render(request, 'upload.html', {'error_message': error_message})
        if not image:
            error_message = 'Выберите изображение.'

            return render(request, 'upload.html', {'error_message': error_message})

        # Фильтр запрещенных символов
        if re.match(r'^[\w\d\s-][^.]+$', description):
            user = request.user
            if image:
                photo = Photo.objects.create(image=image, description=description, user=user)
                return redirect(reverse('index'))
        else:
            # Обработка недопустимых символов
            error_message = "Недопустимые символы в названии файла."

    # Возвращаем рендеринг страницы с передачей текста ошибки
    return render(request, 'upload.html', {'error_message': error_message})

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')  # Перенаправляем на главную страницу после успешного входа
    return render(request, 'main.html')

def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')  # Перенаправляем на страницу входа после успешной регистрации
    else:
        form = UserCreationForm()
    return render(request, 'main.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('index')  # Перенаправляем на главную страницу после разлогинивания

def auth(request):
    return render(request, 'auth.html', )

def register(request):
    return render(request, 'register.html', )

def post(request):
    return render(request, 'post.html', )

def profile(request):
    return render(request, 'profile.html', )

def support(request):
    return render(request, 'support.html', )

def params(request):
    return render(request, 'settings.html', )

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