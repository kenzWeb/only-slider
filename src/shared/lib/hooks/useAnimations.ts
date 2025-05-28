import {gsap} from 'gsap'
import {useCallback, useRef} from 'react'
import {
	animateCircleRotation,
	animateItemRotation,
} from '../animations/circleAnimations'
import {createYearAnimation} from '../animations/numberAnimations'
import {
	animateButtonPress,
	animateCardAppear,
} from '../animations/sliderAnimations'

const ANIMATION_PRESETS = {
	FAST: 0.2,
	NORMAL: 0.3,
	SLOW: 0.6,
	VERY_SLOW: 1.0,

	EASE_OUT: 'power2.out',
	EASE_IN_OUT: 'power2.inOut',
	BOUNCE: 'back.out(1.7)',
	ELASTIC: 'elastic.out(1, 0.5)',

	HOVER_SCALE: 1.1,
	ACTIVE_SCALE: 1.2,
	PRESS_SCALE: 0.95,
} as const

export const useAnimations = () => {
	const timelineRef = useRef<gsap.core.Timeline | null>(null)

	const cleanup = useCallback(() => {
		if (timelineRef.current) {
			timelineRef.current.kill()
			timelineRef.current = null
		}
	}, [])

	const animateCircle = useCallback(
		(element: HTMLElement, activeIndex: number, totalItems: number) => {
			cleanup()
			return animateCircleRotation(element, activeIndex, totalItems, {
				duration: 1.4,
				ease: 'power2.out',
			})
		},
		[cleanup],
	)

	const animateItem = useCallback(
		(element: HTMLElement, rotationOffset: number) => {
			return animateItemRotation(element, rotationOffset, {
				duration: 1.4,
				ease: 'power2.out',
			})
		},
		[],
	)

	const animateYears = useCallback(
		(
			startElement: HTMLElement | null,
			endElement: HTMLElement | null,
			fromYears: {start: number; end: number},
			toYears: {start: number; end: number},
			onComplete?: () => void,
		) => {
			cleanup()
			
			const isMobile = window.innerWidth <= 480
			const duration = isMobile ? 1.0 : 1.6

			const animation = createYearAnimation(
				startElement,
				endElement,
				fromYears,
				toYears,
				{
					duration,
					ease: 'power2.out',
					onComplete,
				},
			)
			if (animation) {
				timelineRef.current = animation
			}
			return animation
		},
		[cleanup],
	)

	const animateCard = useCallback((card: HTMLElement, delay: number = 0) => {
		return animateCardAppear(card, delay, {
			duration: ANIMATION_PRESETS.NORMAL,
			ease: ANIMATION_PRESETS.BOUNCE,
		})
	}, [])

	const animateButton = useCallback((button: HTMLElement) => {
		return animateButtonPress(button, {
			duration: ANIMATION_PRESETS.FAST,
			ease: ANIMATION_PRESETS.EASE_OUT,
			scale: ANIMATION_PRESETS.PRESS_SCALE,
		})
	}, [])

	const animateAppear = useCallback(
		(element: HTMLElement, delay: number = 0) => {
			gsap.fromTo(
				element,
				{
					opacity: 0,
					y: 20,
					scale: 0.9,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: ANIMATION_PRESETS.NORMAL,
					delay,
					ease: ANIMATION_PRESETS.BOUNCE,
				},
			)
		},
		[],
	)

	const animateDisappear = useCallback(
		(element: HTMLElement, onComplete?: () => void) => {
			gsap.to(element, {
				opacity: 0,
				y: -20,
				scale: 0.9,
				duration: ANIMATION_PRESETS.NORMAL,
				ease: ANIMATION_PRESETS.EASE_OUT,
				onComplete,
			})
		},
		[],
	)

	return {
		animateCircle,
		animateItem,
		animateYears,
		animateCard,
		animateButton,

		animateAppear,
		animateDisappear,

		cleanup,

		presets: ANIMATION_PRESETS,
	}
}
