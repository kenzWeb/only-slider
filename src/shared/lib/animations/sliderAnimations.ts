import {gsap} from 'gsap'

export const animateSlideChange = (
	element: HTMLElement,
	direction: 'next' | 'prev' = 'next',
	options: {
		duration?: number
		ease?: string
		onComplete?: () => void
	} = {},
): gsap.core.Timeline => {
	const {duration = 0.5, ease = 'power3.out', onComplete} = options
	const xOffset = direction === 'next' ? 100 : -100

	const timeline = gsap.timeline({onComplete})

	timeline.to(element, {
		opacity: 0,
		x: -xOffset,
		duration: duration / 2,
		ease,
	})

	timeline.set(element, {
		x: xOffset,
	})

	timeline.to(element, {
		opacity: 1,
		x: 0,
		duration: duration / 2,
		ease,
	})

	return timeline
}

export const animateCardsSlide = (
	container: HTMLElement,
	offset: number,
	options: {
		duration?: number
		ease?: string
	} = {},
): gsap.core.Tween => {
	const {duration = 0.6, ease = 'power3.out'} = options

	return gsap.to(container, {
		x: offset,
		duration,
		ease,
	})
}

export const animateButtonPress = (
	button: HTMLElement,
	options: {
		duration?: number
		ease?: string
		scale?: number
	} = {},
): gsap.core.Timeline => {
	const {duration = 0.1, ease = 'power2.out', scale = 0.95} = options

	const timeline = gsap.timeline()

	timeline
		.to(button, {
			scale,
			duration,
			ease,
		})
		.to(button, {
			scale: 1,
			duration,
			ease,
		})

	return timeline
}
