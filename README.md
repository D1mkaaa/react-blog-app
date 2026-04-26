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

- **React 18** (функциональные компоненты, хуки)
- **React Router v6** (маршрутизация)
- **Axios** (запросы к API)
- **JSONPlaceholder API** (тестовый бэкенд)
- **Framer Motion** (анимации)
- **CSS** (CSS-модули + глобальные стили + эффект стекла)

## ⚡ Функционал

- ✅ Авторизация (контекст + localStorage)
- ✅ Создание и удаление постов
- ✅ Сортировка по заголовку/описанию
- ✅ Поиск по заголовку
- ✅ Пагинация и бесконечный скролл
- ✅ Просмотр поста и комментариев
- ✅ Анимации появления/исчезновения (Framer Motion)
- ✅ Адаптивный дизайн (мобильные устройства)
- ✅ Современный UI (стеклянные карточки, градиенты)

## 📦 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/D1mkaaa/react-blog-app.git

# Перейти в папку проекта
cd react-blog-app

# Установить зависимости
npm install

# Запустить в режиме разработки
npm start

## Структура проекта

```text
src/
├── API/                          # Работа с API
│   └── PostService.js            # Все запросы к серверу (axios)
│
├── components/                   # Все React-компоненты
│   ├── AppRouter.jsx             # Главный роутер (маршрутизация)
│   ├── ClassCounter.jsx          # Пример классового компонента
│   ├── Counter.jsx               # Пример функционального компонента
│   ├── ErrorBoundary.jsx         # Отлов ошибок в приложении
│   ├── PostFilter.jsx            # Фильтр (сортировка + поиск)
│   ├── PostForm.jsx              # Форма создания нового поста
│   ├── PostItem.jsx              # Карточка одного поста
│   ├── PostList.jsx              # Список всех постов (с анимацией)
│   │
│   └── UI/                       # Переиспользуемые UI-компоненты
│       ├── button/               # Кнопка
│       │   ├── MyButton.jsx
│       │   └── MyButton.module.css
│       ├── input/                # Поле ввода
│       │   ├── MyInput.jsx
│       │   └── MyInput.module.css
│       ├── Loader/               # Лоадер (спиннер)
│       │   ├── Loader.jsx
│       │   └── Loader.module.css
│       ├── MyModal/              # Модальное окно
│       │   ├── MyModal.jsx
│       │   └── MyModal.module.css
│       ├── Navbar/               # Панель навигации
│       │   └── NavBar.jsx
│       ├── pagination/           # Пагинация (номера страниц)
│       │   └── Pagination.jsx
│       └── select/               # Выпадающий список
│           └── MySelect.jsx
│
├── context/                      # Контекст (глобальное состояние)
│   └── index.js                  # AuthContext (авторизация)
│
├── hooks/                        # Кастомные хуки
│   ├── useFetching.jsx           # Оборачивает асинхронные запросы (loading, error)
│   ├── useObserver.jsx           # Бесконечный скролл (Intersection Observer)
│   └── usePosts.jsx              # Сортировка + поиск постов
│
├── pages/                        # Страницы приложения
│   ├── About.jsx                 # О сайте
│   ├── Login.jsx                 # Страница входа
│   ├── PostIdPages.jsx           # Страница отдельного поста с комментариями
│   └── Posts.jsx                 # Главная страница с постами
│
├── router/                       # Настройка маршрутов
│   └── routes.js                 # publicRoutes и privateRoutes
│
├── styles/                       # Глобальные стили
│   └── App.css                   # Основные стили (навбар, карточки, адаптив)
│
├── utils/                        # Вспомогательные функции
│   └── pages.js                  # Подсчёт страниц для пагинации
│
├── App.js                        # Главный компонент (обёртка)
└── index.js                      # Точка входа (рендер приложения)
```

## Контакты

**D1mkaaa** — [GitHub](https://github.com/D1mkaaa)

