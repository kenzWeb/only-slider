import {useCallback, useState} from 'react'

interface UseSliderStateParams {
	totalSlides: number
}

export const useSliderState = ({totalSlides}: UseSliderStateParams) => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(totalSlides <= 1)

	const updateSliderState = useCallback(
		(activeIndex: number, beginning: boolean, end: boolean) => {
			setCurrentSlide(activeIndex + 1)
			setIsBeginning(beginning)
			setIsEnd(end)
		},
		[],
	)

	const resetSlider = useCallback(() => {
		setCurrentSlide(1)
		setIsBeginning(true)
		setIsEnd(totalSlides <= 1)
	}, [totalSlides])

	return {
		currentSlide,
		isBeginning,
		isEnd,
		updateSliderState,
		resetSlider,
	}
}
