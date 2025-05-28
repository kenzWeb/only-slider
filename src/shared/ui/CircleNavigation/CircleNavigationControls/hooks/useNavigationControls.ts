import {useEffect, useRef, useState} from 'react'

export const useNavigationControls = (
	activeIndex: number,
	onPrevious: () => void,
	onNext: () => void,
	enableKeyboardNavigation: boolean,
) => {
	const currentSlide = activeIndex + 1
	const [isUpdating, setIsUpdating] = useState(false)
	const prevSlideRef = useRef(currentSlide)

	useEffect(() => {
		if (prevSlideRef.current !== currentSlide) {
			setIsUpdating(true)
			const timer = setTimeout(() => {
				setIsUpdating(false)
				prevSlideRef.current = currentSlide
			}, 200)
			return () => clearTimeout(timer)
		}
	}, [currentSlide])

	useEffect(() => {
		if (!enableKeyboardNavigation) return

		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowLeft':
					event.preventDefault()
					onPrevious()
					break
				case 'ArrowRight':
					event.preventDefault()
					onNext()
					break
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onPrevious, onNext, enableKeyboardNavigation])

	return {
		currentSlide,
		isUpdating,
	}
}
