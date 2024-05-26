from rest_framework import generics
from comments.models import Comment
from comments.serializers import CommentSerializer


# Create your views here.
class CommentAPIViewList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentAPIViewUpdate(generics.RetrieveUpdateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentAPIViewDestroy(generics.RetrieveDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
