# Лабораторная работа №5

## Задачи:
-  URL /article/new/, представление create_post
-  Проверка авторизации (request.user.is_authenticated)
-  Обработка GET (возврат формы) и POST (сохранение в БД) запросов
-  Проверка: если не все поля заполнены, возвращается ошибка
-  Шаблон create_post.html с {% csrf_token %}, полями title/text, кнопкой
-  Вывод ошибок в {{ form.errors }}
-  Перенаправление на страницу созданного поста после сохранения
-  **Задание**: CSS-стили для формы (макет lab5_creation_form)
-  **Задание**: проверка уникальности названия (title_exists)

## БД заполнена в Л.Р. 3
| username | пароль   | права     |
|----------|----------|-----------|
| admin    | admin123 | superuser |
| vasya    | vasya123 | обычный   |
| anya     | anya123  | обычный   |
| georgiy  | geo123   | обычный   |

Статьи: «Введение в Python», «Основы Django: первые шаги»,
«HTML и CSS для начинающих», «JavaScript в браузере»

## Запуск
```bash
cd lab5/blog
python manage.py runserver   
```
