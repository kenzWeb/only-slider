import {gsap} from 'gsap'

export const animateCircleRotation = (
	circleElement: HTMLElement,
	activeIndex: number,
	totalItems: number,
	options: {
		duration?: number
		ease?: string
	} = {},
): gsap.core.Tween => {
	const {duration = 1.2, ease = 'power2.out'} = options
	const rotationAngle = (activeIndex * 360) / totalItems

	return gsap.to(circleElement, {
		rotation: -rotationAngle,
		duration,
		ease,
	})
}

export const animateItemRotation = (
	itemElement: HTMLElement,
	rotationOffset: number,
	options: {
		duration?: number
		ease?: string
	} = {},
): gsap.core.Tween => {
	const {duration = 1.2, ease = 'power2.out'} = options

	return gsap.to(itemElement, {
		rotation: rotationOffset,
		duration,
		ease,
	})
}

export const animateHover = (
	element: HTMLElement,
	isHovered: boolean,
	options: {
		duration?: number
		ease?: string
		scaleActive?: number
		scaleDefault?: number
	} = {},
): gsap.core.Tween => {
	const {
		duration = 0.2,
		ease = 'power2.out',
		scaleActive = 1.1,
		scaleDefault = 1,
	} = options

	return gsap.to(element, {
		scale: isHovered ? scaleActive : scaleDefault,
		duration,
		ease,
	})
}

export const animateActiveState = (
	element: HTMLElement,
	isActive: boolean,
	options: {
		duration?: number
		ease?: string
		activeScale?: number
		defaultScale?: number
		activeOpacity?: number
		defaultOpacity?: number
	} = {},
): gsap.core.Tween => {
	const {
		duration = 0.3,
		ease = 'power2.out',
		activeScale = 1.2,
		defaultScale = 1,
		activeOpacity = 1,
		defaultOpacity = 0.7,
	} = options

	return gsap.to(element, {
		scale: isActive ? activeScale : defaultScale,
		opacity: isActive ? activeOpacity : defaultOpacity,
		duration,
		ease,
	})
}

export const animatePulse = (
	element: HTMLElement,
	options: {
		duration?: number
		ease?: string
		scale?: number
		repeat?: number
	} = {},
): gsap.core.Tween => {
	const {
		duration = 1,
		ease = 'power2.inOut',
		scale = 1.05,
		repeat = -1,
	} = options

	return gsap.to(element, {
		scale,
		duration,
		ease,
		repeat,
		yoyo: true,
	})
}
