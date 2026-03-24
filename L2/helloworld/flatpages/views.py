# coding: utf-8
from django.http import HttpResponse
from django.shortcuts import render

def home_text(request): # Текстовый Вариант
    return HttpResponse('Привет, Мир!')

def home(request): # Основной Вариант
    return render(request, 'static_handler.html', {})
