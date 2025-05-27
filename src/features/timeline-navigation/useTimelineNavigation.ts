import {useCallback, useState} from 'react'
import {ANIMATION_CONFIG} from '../../shared/lib/constants'

export const useTimelineNavigation = (totalItems: number) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)

	const navigateToIndex = useCallback(
		(index: number) => {
			if (
				index === activeIndex ||
				isAnimating ||
				index < 0 ||
				index >= totalItems
			) {
				return false
			}

			setIsAnimating(true)
			setActiveIndex(index)

			setTimeout(() => {
				setIsAnimating(false)
			}, ANIMATION_CONFIG.ROTATION_DURATION * 1000)

			return true
		},
		[activeIndex, isAnimating, totalItems],
	)

	const navigateNext = useCallback(() => {
		const nextIndex = activeIndex < totalItems - 1 ? activeIndex + 1 : 0
		return navigateToIndex(nextIndex)
	}, [activeIndex, totalItems, navigateToIndex])

	const navigatePrev = useCallback(() => {
		const prevIndex = activeIndex > 0 ? activeIndex - 1 : totalItems - 1
		return navigateToIndex(prevIndex)
	}, [activeIndex, totalItems, navigateToIndex])

	return {
		activeIndex,
		isAnimating,
		navigateToIndex,
		navigateNext,
		navigatePrev,
	}
}
