# Лабораторная работа №6

## Задачи:
-  URL /login/ + представление user_login
  - authenticate(username, password) => login(request, user)
  - Ошибка: "Нет аккаунта с таким сочетанием никнейма и пароля"
-  Шаблон login.html (форма: логин + пароль, ошибка)
-  URL /register/ + представление register
  - User.objects.create_user(username, email, password)
  - Проверка уникальности: User.objects.get(username=username) => DoesNotExist
  - Проверка непустых полей
-  Шаблон registration.html (форма: логин + email + пароль, ошибки)
-  CSS-стили (макет lab6_registration_form / lab6_authorization_form)
-  **Задание**: ссылка "Регистрация" вверху справа на archive.html и article.html

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
cd lab6/blog
python manage.py runserver   
```
