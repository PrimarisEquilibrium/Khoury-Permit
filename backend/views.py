import requests
import os

from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from braces.views import CsrfExemptMixin

from .serializers import ProjectSerializer, CategorySerializer, EmailSerializer
from .models import Project, Category


class ProjectView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class CategoryView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class EmailView(CsrfExemptMixin, APIView):
    authentication_classes = []

    def post(self, request):
        serializer = EmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            name, email, message = [*serializer.data.values()]
        except ValueError:
            return Response(
                "Invalid POST data, make sure the fields you pass are the name, email, and message.", 
                status.HTTP_400_BAD_REQUEST
            )

        send_mail(
            f"[Khoury Designs] {name} sent an email",
            message,
            email,
            ["khourydesignpermits@gmail.com", "incorrectclock1@gmail.com"],
        )

        return Response(serializer.data, status.HTTP_200_OK)


class RecaptchaView(CsrfExemptMixin, APIView):
    authentication_classes = []

    def post(self, request):
        r = requests.post(
        'https://www.google.com/recaptcha/api/siteverify',
        data={
            'secret': os.environ.get("RECAPTCHA_SECRET_KEY"),
            'response': request.data['captcha_value']
        }
        )

        return Response({'captcha': r.json()})