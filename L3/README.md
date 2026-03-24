# Лабораторная работа №3

## Задачи
-  Django-проект blog, приложение articles
-  Модель Article: поля title, author (\[ForeignKey] User), text, created_date (auto)
-  Метод __str__ (Представление в форме строки): "author: title"
-  Метод get_excerpt: первые 140 символов + "..."
-  admin.py — класс ArticleAdmin с list_display
-  Представление archive возвращает все статьи через Article.objects.all()
-  Шаблон archive.html с циклом {% for post in posts %}
-  article.css с базовыми стилями (фон #1abc9c, Tahoma, белый текст)
-  **Задание**: созданы 3 статьи через /admin/ 
  - «Введение в Python» (автор: vasya)
  - «Основы Django» (автор: anya)
  - «HTML и CSS для начинающих» (автор: georgiy)
-  **Задание**: через SQLiteManager изменён текст статьи «Введение в Python»
  (добавлен абзац про f-строки и оператор walrus)
-  **Задание**: через SQLiteManager изменено название «Основы Django»
  -> «Основы Django: первые шаги»
-  **Задание (dynamic template)**: добавлена 4-я запись «JavaScript в браузере»
  через менеджер базы данных

## Пользователи БД
| username | пароль    | права     |
|----------|-----------|-----------|
| admin    | admin123  | superuser |
| vasya    | vasya123  | обычный   |
| anya     | anya123   | обычный   |
| georgiy  | geo123    | обычный   |


## Запуск
```bash
cd lab3/blog
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
