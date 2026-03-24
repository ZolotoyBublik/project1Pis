# Лабораторная работа №2

## Задачи:
-  Django-проект helloworld, приложение flatpages
-  views.py — функция home возвращает HttpResponse('Привет, Мир!')
-  Шаблон index.html — h1, h2, h3, маркированный/нумерованный список, таблица
-  Шаблон static_handler.html — с подключённым CSS
-  **Задание**: адрес /hello/ возвращает тот же текст (добавить в urls.py)
-  **Задание**: тип ответа по умолчанию (без mimetype)
-  **Задание**: +2 строки и +1 столбец в таблице
-  **Задание**: таблица без border
-  **Задание**: заголовки списков — \<h4> (14px по заданию)
-  **Задание**: картинка dpb-logo.png высотой 30px
-  **Задание**: h1 — шрифт с засечками (Georgia)
-  **Задание**: ширина таблицы == 100%
-  index.css с фоном #5d1cc5, Tahoma, выравниванием таблицы


## Запуск
```bash
cd lab2/helloworld
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
