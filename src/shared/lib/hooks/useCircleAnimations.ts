import {useCallback} from 'react'
import {
	animateCircleRotation,
	animateItemRotation,
} from '../animations/circleAnimations'
import {ANIMATION_CONFIG} from '../constants'

export const useCircleAnimations = () => {
	const cleanup = useCallback(() => {}, [])

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

	return {
		animateCircle,
		animateItem,
	}
}
