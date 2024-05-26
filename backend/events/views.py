from rest_framework import generics
from events.models import Event
from events.serializers import EventSerializer


# Create your views here.
class EventAPIViewList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventAPIViewUpdate(generics.RetrieveUpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventAPIViewDestroy(generics.RetrieveDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer