# 📝 React Blog App

**SPA-приложение на React** для просмотра, создания, сортировки и поиска постов с авторизацией, пагинацией и бесконечной подгрузкой.

[![React](https://img.shields.io/badge/React-18-61dafb)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-v6-ca4245)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-1.6-5a29e4)](https://axios-http.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16-0055ff)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🌐 Демо

**Проект доступен по ссылке:** [d1mkaaa.github.io/react-blog-app](https://d1mkaaa.github.io/react-blog-app)

## 🛠️ Технологии

- **React 18** (функциональные компоненты, хуки, контекст)
- **React Router v6** (маршрутизация, приватные роуты)
- **Axios** (запросы к API)
- **JSONPlaceholder API** (тестовый бэкенд)
- **Framer Motion** (анимации появления/исчезновения)
- **CSS** (CSS-модули + глобальные стили + эффект стекла)

## ⚡ Функционал

- ✅ Авторизация (контекст + localStorage)
- ✅ Создание и удаление постов
- ✅ Сортировка по заголовку/описанию
- ✅ Поиск по заголовку
- ✅ Пагинация и бесконечный скролл (Intersection Observer)
- ✅ Просмотр поста и комментариев
- ✅ Анимации появления/исчезновения (Framer Motion)
- ✅ Адаптивный дизайн (мобильные устройства)
- ✅ Современный UI (стеклянные карточки, градиенты)
  
## 📦 Установка и запуск

bash
# Клонировать репозиторий
git clone https://github.com/D1mkaaa/react-blog-app.git

# Перейти в папку проекта
cd react-blog-app

# Установить зависимости
npm install

# Запустить в режиме разработки
npm start
## Структура проекта

```
react-blog-app/
├── src/
│   ├── API/
│   │   └── PostService.js            # Все запросы к серверу (axios)
│   ├── components/
│   │   ├── AppRouter.jsx             # Главный роутер (маршрутизация)
│   │   ├── ErrorBoundary.jsx         # Отлов ошибок в приложении
│   │   ├── PostFilter.jsx            # Фильтр (сортировка + поиск)
│   │   ├── PostForm.jsx              # Форма создания нового поста
│   │   ├── PostItem.jsx              # Карточка одного поста
│   │   ├── PostList.jsx              # Список всех постов (с анимацией)
│   │   └── UI/
│   │       ├── button/               # Кнопка
│   │       ├── input/                # Поле ввода
│   │       ├── Loader/               # Лоадер (спиннер)
│   │       ├── MyModal/              # Модальное окно
│   │       ├── Navbar/               # Панель навигации
│   │       ├── pagination/           # Пагинация (номера страниц)
│   │       └── select/               # Выпадающий список
│   ├── context/
│   │   └── index.js                  # AuthContext (авторизация)
│   ├── hooks/
│   │   ├── useFetching.jsx           # Оборачивает асинхронные запросы
│   │   ├── useObserver.jsx           # Бесконечный скролл (Intersection Observer)
│   │   └── usePosts.jsx              # Сортировка + поиск постов
│   ├── pages/
│   │   ├── About.jsx                 # О сайте
│   │   ├── Login.jsx                 # Страница входа
│   │   ├── PostIdPages.jsx           # Страница поста с комментариями
│   │   └── Posts.jsx                 # Главная страница с постами
│   ├── router/
│   │   └── routes.js                 # publicRoutes и privateRoutes
│   ├── styles/
│   │   └── App.css                   # Глобальные стили
│   ├── utils/
│   │   └── pages.js                  # Подсчёт страниц для пагинации
│   ├── App.js                        # Корневой компонент
│   └── index.js                      # Точка входа
├── public/
└── package.json
```

📊 API Данные
Для демонстрации используются тестовые данные с JSONPlaceholder API:

posts — список постов (заголовки, текст, id)

comments — комментарии к постам с email и текстом

📞 Контакты
D1mkaaa — GitHub
