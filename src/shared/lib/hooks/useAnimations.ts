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
import {ANIMATION_CONFIG} from '../constants'

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
				duration: ANIMATION_CONFIG.DURATIONS.CIRCLE,
				ease: ANIMATION_CONFIG.EASING.OUT,
			})
		},
		[cleanup],
	)

	const animateItem = useCallback(
		(element: HTMLElement, rotationOffset: number) => {
			return animateItemRotation(element, rotationOffset, {
				duration: ANIMATION_CONFIG.DURATIONS.CIRCLE,
				ease: ANIMATION_CONFIG.EASING.OUT,
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
			const duration = isMobile
				? ANIMATION_CONFIG.DURATIONS.MOBILE
				: ANIMATION_CONFIG.DURATIONS.DESKTOP

			const animation = createYearAnimation(
				startElement,
				endElement,
				fromYears,
				toYears,
				{
					duration,
					ease: ANIMATION_CONFIG.EASING.OUT,
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
			duration: ANIMATION_CONFIG.DURATIONS.NORMAL,
			ease: ANIMATION_CONFIG.EASING.BOUNCE,
		})
	}, [])

	const animateButton = useCallback((button: HTMLElement) => {
		return animateButtonPress(button, {
			duration: ANIMATION_CONFIG.DURATIONS.FAST,
			ease: ANIMATION_CONFIG.EASING.OUT,
			scale: ANIMATION_CONFIG.SCALES.PRESS,
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
					duration: ANIMATION_CONFIG.DURATIONS.NORMAL,
					delay,
					ease: ANIMATION_CONFIG.EASING.BOUNCE,
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
				duration: ANIMATION_CONFIG.DURATIONS.NORMAL,
				ease: ANIMATION_CONFIG.EASING.OUT,
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
		config: ANIMATION_CONFIG,
	}
}
