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

## Использование

```tsx
import {MainPage} from './pages'

function App() {
	return <MainPage />
}
```

## Компоненты

### Основные виджеты

#### TimelineWidget

Основной виджет, объединяющий все компоненты временной шкалы:

- Круговая навигация с анимированными точками
- Слайдер карточек событий (Swiper)
- Синхронизация между навигацией и слайдером
- Анимированные переходы между периодами

### Атомарные UI компоненты

#### YearsDisplay

Отображение годов периода с градиентной анимацией:

```tsx
<YearsDisplay startYear={1990} endYear={2000} />
```

#### PeriodTitle

Заголовок временного периода с поддержкой анимаций:

```tsx
<PeriodTitle title='Наука и технологии' />
```

#### TimelineHeader

Объединенный компонент для отображения годов и заголовка:

```tsx
<TimelineHeader data={timelineData} ref={headerRef} />
```

#### EventCard

Карточка события с годом, заголовком и описанием:

```tsx
<EventCard event={{year: 1991, title: 'Событие', description: 'Описание'}} />
```

#### SliderButton

Кнопка навигации слайдера с иконками:

```tsx
<SliderButton direction='prev' disabled={false} onClick={handlePrev} />
```

#### SliderCounter

Счетчик текущего слайда:

```tsx
<SliderCounter current={3} total={10} />
```

### Навигационные компоненты

#### CircleNavigation

Круговая навигация по временным периодам:

- Математическое позиционирование точек по окружности
- Плавные GSAP анимации при переключении
- Поддержка произвольного количества элементов

#### CircleNavigationItem

Отдельная точка круговой навигации:

```tsx
<CircleNavigationItem
	index={0}
	isActive={true}
	label='Период'
	onClick={handleClick}
/>
```

### Слайдер компоненты

#### TimelineSlider

Горизонтальный слайдер событий:

- Карточки событий фиксированной ширины
- Навигация стрелками с состоянием disabled
- Адаптивность для разных устройств
- Оптимизированная производительность

## Хуки и утилиты

### Хуки анимаций

#### useHeaderAnimations

Управление анимациями заголовка и годов:

```tsx
const {animateContentChange} = useHeaderAnimations({yearsRef, titleRef})
```

#### useCirclePositions

Вычисление позиций точек на окружности:

```tsx
const positions = useCirclePositions({totalItems: 6})
```

#### useGsapAnimations

Базовые GSAP анимации для компонентов:

```tsx
const {fadeInOut, slideIn, rotateElement} = useGsapAnimations()
```

### Хуки состояния

#### useTimelineNavigation

Управление навигацией по временным периодам:

```tsx
const {activeIndex, navigateToIndex, isAnimating} = useTimelineNavigation(6)
```

#### useSliderState

Состояние слайдера событий:

```tsx
const {currentSlide, isBeginning, isEnd, updateSliderState} = useSliderState({
	totalSlides: 10,
})
```

### Утилиты валидации

#### validateTimelineData

Проверка корректности данных временного периода.

#### validateTimelineEvent

Проверка корректности события.

### Утилиты-помощники

#### formatYear, calculatePeriodDuration

Форматирование и вычисления для временных данных.

#### sortEventsByYear, groupEventsByYear

Сортировка и группировка событий.

## Конфигурация

Все числа вынесены в конфигурационные константы:

```typescript
export const CIRCLE_CONFIG = {
	RADIUS: 265,
	CENTER_X: 265,
	CENTER_Y: 265,
	START_ANGLE: -60,
	ITEM_SIZE: 56,
	ITEM_SIZE_MOBILE: 40,
} as const

export const ANIMATION_CONFIG = {
	ROTATION_DURATION: 1,
	ROTATION_EASE: 'power2.inOut',
	CONTENT_CHANGE_DURATION: 0.3,
	CONTENT_CHANGE_EASE: 'power2.out',
} as const

export const SLIDER_CONFIG = {
	SPACE_BETWEEN: 80,
	SPACE_BETWEEN_TABLET: 40,
	SPACE_BETWEEN_MOBILE: 25,
	SLIDE_WIDTH: 320,
	SLIDE_WIDTH_MOBILE: 280,
	SPEED: 400,
} as const
```

## Данные

Структура данных временного периода:

```typescript
interface TimelineData {
	id: number
	title: string
	startYear: number
	endYear: number
	events: TimelineEvent[]
}

interface TimelineEvent {
	year: number
	description: string
}
```
