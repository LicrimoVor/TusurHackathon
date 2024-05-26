from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from profiles.views import *


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/1/profilelist/", ProfilesAPIViewList.as_view()),
    path("api/1/profilelistup/<int:pk>/", ProfilesAPIViewUpdate.as_view()),
    path("api/1/profiledelete/<int:pk>/", ProfilesAPIViewDestroy.as_view())

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
