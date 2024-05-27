from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from profiles.views import *
from groups.views import *
from events.views import *
from comments.views import *


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/1/profilelist/", ProfilesAPIViewList.as_view()),
    path("api/1/profilelistup/<int:pk>/", ProfilesAPIViewUpdate.as_view()),
    path("api/1/profiledelete/<int:pk>/", ProfilesAPIViewDestroy.as_view()),
    path("api/1/grouplelist/", GroupsAPIViewList.as_view()),
    path("api/1/grouplistup/<int:pk>/", GroupsAPIViewUpdate.as_view()),
    path("api/1/groupdelete/<int:pk>/", GroupsAPIViewDestroy.as_view()),
    path("api/1/eventslist/", EventAPIViewList.as_view()),
    path("api/1/evenstup/<int:pk>/", EventAPIViewUpdate.as_view()),
    path("api/1/eventsdelete/<int:pk>/", EventAPIViewDestroy.as_view()),
    path("api/1/commentlist/", CommentAPIViewList.as_view()),
    path("api/1/commentup/<int:pk>/", CommentAPIViewUpdate.as_view()),
    path("api/1/commentdelete/<int:pk>/", CommentAPIViewDestroy.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
