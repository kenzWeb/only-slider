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
