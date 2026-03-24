# Лабораторная работа №4

## Задачи:
-  Скопирован проект из лаб 3, добавлен URL article/<id>/
-  Представление get_article(request, article_id) с обработкой Http404
-  Шаблон article.html — вывод одной статьи полностью
-  **Задание**: заголовки на странице archive — ссылки <a href="/article/{{ post.id }}/">
-  **Задание**: ссылка "← Все записи" на странице одной статьи
-  **Задание**: стили для обеих страниц (макет lab4_main / lab4_item)
  - body: #5d1cc5, Tahoma, белый текст
  - .header img: block, width=318px, auto-margin
  - .archive: width=960px, auto-margin
  - .post-title a: color #ffffff
  - .article-author: width 50%, float left
  - .article-created-date: text-align right

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
cd lab4/blog
python manage.py runserver
```
