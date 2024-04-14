from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from foto.views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('upload/', upload, name='upload'),
    path('auth/', auth, name='auth'),
    path('search/', index, name='search_photos'),
    path('search/', search, name='search'),
    path('register/', register, name='register'),
    path('upload_photo/', upload_photo, name='upload_photo'),
    path('logout', logout_view, name='logout'),
    path('login_view', login_view, name='login_view')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)