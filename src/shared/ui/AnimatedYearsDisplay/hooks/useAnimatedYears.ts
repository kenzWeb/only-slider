import {useEffect, useRef, useState} from 'react'
import {useAnimations} from '../../../lib/hooks'

export const useAnimatedYears = (startYear: number, endYear: number) => {
	const [currentStartYear, setCurrentStartYear] = useState(startYear)
	const [currentEndYear, setCurrentEndYear] = useState(endYear)
	const startYearRef = useRef<HTMLSpanElement>(null)
	const endYearRef = useRef<HTMLSpanElement>(null)
	const {animateYears, cleanup} = useAnimations()

	useEffect(() => {
		if (startYear === currentStartYear && endYear === currentEndYear) return

		animateYears(
			startYearRef.current,
			endYearRef.current,
			{start: currentStartYear, end: currentEndYear},
			{start: startYear, end: endYear},
			() => {
				setCurrentStartYear(startYear)
				setCurrentEndYear(endYear)
			},
		)

		return cleanup
	}, [
		startYear,
		endYear,
		currentStartYear,
		currentEndYear,
		animateYears,
		cleanup,
	])

	return {
		currentStartYear,
		currentEndYear,
		startYearRef,
		endYearRef,
	}
}
