import {gsap} from 'gsap'

export const animateNumberChange = (
	targetElement: HTMLElement,
	fromValue: number,
	toValue: number,
	options: {
		duration?: number
		ease?: string
		onComplete?: () => void
	} = {},
): gsap.core.Tween => {
	const {duration = 1.0, ease = 'power2.out', onComplete} = options

	return gsap.to(
		{value: fromValue},
		{
			value: toValue,
			duration,
			ease,
			onUpdate: function () {
				const roundedValue = Math.round(this.targets()[0].value)
				targetElement.textContent = roundedValue.toString()
			},
			onComplete,
		},
	)
}

export const createYearAnimation = (
	startElement: HTMLElement | null,
	endElement: HTMLElement | null,
	fromYears: {start: number; end: number},
	toYears: {start: number; end: number},
	options: {
		duration?: number
		ease?: string
		onComplete?: () => void
	} = {},
): gsap.core.Timeline | null => {
	if (!startElement || !endElement) return null

	const {duration = 1.5, ease = 'power2.out', onComplete} = options
	const timeline = gsap.timeline({onComplete})

	if (fromYears.start !== toYears.start) {
		timeline.add(
			animateNumberChange(startElement, fromYears.start, toYears.start, {
				duration,
				ease,
			}),
			0,
		)
	}

	if (fromYears.end !== toYears.end) {
		timeline.add(
			animateNumberChange(endElement, fromYears.end, toYears.end, {
				duration,
				ease,
			}),
			0,
		)
	}

	return timeline
}

export const animateFadeIn = (
	element: HTMLElement,
	options: {
		duration?: number
		delay?: number
		ease?: string
		from?: {opacity?: number; y?: number; x?: number}
		to?: {opacity?: number; y?: number; x?: number}
	} = {},
): gsap.core.Tween => {
	const {
		duration = 0.3,
		delay = 0,
		ease = 'power2.out',
		from = {opacity: 0, y: 20},
		to = {opacity: 1, y: 0, x: 0},
	} = options

	gsap.set(element, from)

	return gsap.to(element, {
		...to,
		duration,
		delay,
		ease,
	})
}

export const animateFadeOut = (
	element: HTMLElement,
	options: {
		duration?: number
		ease?: string
		to?: {opacity?: number; y?: number; x?: number}
		onComplete?: () => void
	} = {},
): gsap.core.Tween => {
	const {
		duration = 0.3,
		ease = 'power2.out',
		to = {opacity: 0, y: -20},
		onComplete,
	} = options

	return gsap.to(element, {
		...to,
		duration,
		ease,
		onComplete,
	})
}
