# React Blog App

SPA-приложение на React для просмотра, создания, сортировки и поиска постов с авторизацией, пагинацией и бесконечной подгрузкой.

## Демо

Проект доступен по ссылке: [d1mkaaa.github.io/react-blog-app](https://d1mkaaa.github.io/react-blog-app)

## Технологии

- **React 18** (функциональные компоненты, хуки)
- **React Router v6** (маршрутизация)
- **Axios** (запросы к API)
- **JSONPlaceholder API** (тестовый бэкенд)
- **Framer Motion** (анимации)
- **CSS** (CSS-модули + глобальные стили + glassmorphism)

## Функционал

- ✅ Авторизация (контекст + localStorage)
- ✅ Создание и удаление постов
- ✅ Сортировка по заголовку/описанию
- ✅ Поиск по заголовку
- ✅ Пагинация и бесконечный скролл
- ✅ Просмотр поста и комментариев
- ✅ Анимации появления/исчезновения (Framer Motion)
- ✅ Адаптивный дизайн (мобильные устройства)
- ✅ Современный UI (стеклянные карточки, градиенты)

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/D1mkaaa/react-blog-app.git

# Перейти в папку проекта
cd react-blog-app

# Установить зависимости
npm install

# Запустить в режиме разработки
npm start
```

## Структура проекта

```
src/
├── API/              # Работа с API (PostService)
├── components/       # UI компоненты
│   ├── UI/          # Переиспользуемые компоненты (MyButton, MyInput, MyModal, Loader)
│   └── ...
├── hooks/           # Кастомные хуки (useFetching, useObserver, usePosts)
├── pages/           # Страницы (Posts, Login, About, PostIdPages)
├── router/          # Маршруты (publicRoutes, privateRoutes)
├── styles/          # Глобальные стили (App.css)
├── utils/           # Вспомогательные функции
└── context/         # AuthContext
```

## Контакты

**D1mkaaa** — [GitHub](https://github.com/D1mkaaa)

---