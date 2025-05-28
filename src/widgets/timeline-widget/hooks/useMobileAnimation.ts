import {useEffect, useState} from 'react'

interface UseMobileAnimationProps {
	activeIndex: number
	isMobile: boolean
	duration?: number
}

export const useMobileAnimation = ({
	activeIndex,
	isMobile,
	duration = 600,
}: UseMobileAnimationProps) => {
	const [isAnimating, setIsAnimating] = useState(false)
	const [animationKey, setAnimationKey] = useState(0)

	useEffect(() => {
		if (isMobile) {
			setIsAnimating(true)
			setAnimationKey((prev) => prev + 1)

			const timer = setTimeout(() => {
				setIsAnimating(false)
			}, duration)

			return () => clearTimeout(timer)
		}
	}, [activeIndex, isMobile, duration])

	return {isAnimating, animationKey}
}
