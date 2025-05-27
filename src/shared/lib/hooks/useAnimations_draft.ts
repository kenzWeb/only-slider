import { animateNumberChange, createYearAnimation } from '../animations/numberAnimations'
import { animateCircleRotation, animateItemRotation, animateHover } from '../animations/circleAnimations'
import { animateSlideChange, animateCardsSlide, animateButtonPress } from '../animations/sliderAnimations'

export const useAnimations = () => {
	const animateYears = (
		startElement: HTMLElement | null,
		endElement: HTMLElement | null,
		fromYears: {start: number; end: number},
		toYears: {start: number; end: number},
		options?: {
			duration?: number
			ease?: string
			onComplete?: () => void
		}
	) => {
		return createYearAnimation(startElement, endElement, fromYears, toYears, options)
	}

	const animateCircle = (
		circleElement: HTMLElement,
		activeIndex: number,
		totalItems: number,
		options?: {
			duration?: number
			ease?: string
		}
	) => {
		return animateCircleRotation(circleElement, activeIndex, totalItems, options)
	}

	return {
		animateYears,
		animateCircle,
		animateNumberChange,
		animateItemRotation,
		animateHover,
		animateSlideChange,
		animateCardsSlide,
		animateButtonPress,
	}
}
