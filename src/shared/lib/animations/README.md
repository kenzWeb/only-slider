# Анимационная система

## Описание
Централизованная система анимаций для Timeline виджета с использованием GSAP.

## Структура
- `numberAnimations.ts` - Анимации чисел и годов
- `circleAnimations.ts` - Анимации круговой навигации
- `sliderAnimations.ts` - Анимации слайдера и карточек
- `constants.ts` - Константы длительности и смягчения
- `types.ts` - TypeScript интерфейсы
- `index.ts` - Основные экспорты

## Использование
```typescript
import { useAnimations } from '@/shared/lib/hooks'

const {animateYears, animateCircle} = useAnimations()
```

## Преимущества
- Переиспользуемые функции анимации
- Централизованная настройка
- Типобезопасность
- Улучшенная производительность
