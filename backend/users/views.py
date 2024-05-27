from rest_framework import viewsets
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import UserProfile
import jwt, datetime
import json

SECRET_KEY = 'M;X0whCPlD8rb:uNC2x$eO7y+N>$<zqWI8XGnk~F0JZviM1DLq+,9a_eBBY' #Нужно перенести отсюда


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data) #Получаем данные из запроса
        serializer.is_valid(raise_exception=True) #Если неправильные данные - ошибка
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = UserProfile.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("Пользователь не найден")
        if not user.check_password(password):
            raise AuthenticationFailed("Неверный пароль")

        issued_at = datetime.datetime.utcnow()
        issued_at_timestamp = int(issued_at.timestamp())
        expiration = issued_at_timestamp + 3600
        payload = {
            'id': user.id,
            'expiration': expiration,
            'iat': issued_at_timestamp
        }

        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256') #Токен

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }

        return response

class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Ошибка авторизации')

        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Ошибка авторизации')

        user = UserProfile.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response