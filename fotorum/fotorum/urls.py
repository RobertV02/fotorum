from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from foto.views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('search/', search, name='search'),
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
    path('upload_image/', upload_image, name='upload_image'),
    path('logout/', logout_view, name='logout'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
