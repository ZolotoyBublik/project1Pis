# Лабораторная работа №3  

Создание модели данных и её регистрация в админ-интерфейсе Django.

## Что реализовано

- модель Post (title, text, created_date)
- регистрация модели в интерфейсе
- вывод всех постов на главной странице
- шаблон posts_list.html

## Команды для запуска

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
