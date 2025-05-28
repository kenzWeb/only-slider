## Технологический стек

- **React.js + TypeScript** - основа приложения
- **SASS/SCSS** - стилизация компонентов
- **Vite** - сборщик и dev сервер
- **Swiper** - слайдер карточек событий
- **GSAP** - анимации круговой навигации

## Архитектура проекта (FSD)

Проект организован согласно методологии [Feature-Sliced Design](https://feature-sliced.design/):

```
src/
├── app/                    # Инициализация приложения
│   ├── App.tsx
│   └── main.tsx
├── pages/                  # Страницы приложения
│   └── main/              # Главная страница
├── widgets/               # Самостоятельные блоки UI
│   └── timeline-widget/   # Виджет временной шкалы
├── features/              # Пользовательские сценарии
│   └── timeline-navigation/ # Навигация по временным периодам
├── entities/              # Бизнес-сущности
│   └── timeline/          # Данные временных периодов
└── shared/                # Переиспользуемые ресурсы
    ├── ui/               # UI-компоненты
    ├── lib/              # Библиотеки и утилиты
    ├── types/            # TypeScript типы
    └── theme/            # Глобальные стили
```

## Установка и запуск

```bash
npm install

npm run dev

npm run build

npm run preview
```
