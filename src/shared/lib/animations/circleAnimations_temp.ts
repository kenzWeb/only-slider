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
	const {duration = 0.8, ease = 'power3.out'} = options
	const rotationAngle = (activeIndex * 360) / totalItems

	return gsap.to(circleElement, {
		rotation: -rotationAngle,
		duration,
		ease,
	})
}
