from rest_framework import generics
from groups.models import Group
from groups.serializers import GroupSerializer


# Create your views here.
class GroupsAPIViewList(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class GroupsAPIViewUpdate(generics.RetrieveUpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class GroupsAPIViewDestroy(generics.RetrieveDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer