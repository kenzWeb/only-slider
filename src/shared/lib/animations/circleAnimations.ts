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
	const {duration = 1.4, ease = 'power2.out'} = options
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
	const {duration = 1.4, ease = 'power2.out'} = options

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
	} = {},
): gsap.core.Tween => {
	const {duration = 0.2, ease = 'power2.out'} = options

	return gsap.to(element, {
		scale: isHovered ? 1.1 : 1,
		duration,
		ease,
	})
}
