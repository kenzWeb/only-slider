import React, {useEffect, useRef, useState} from 'react'
import {useAnimations} from '../../lib/hooks'
import type {AnimatedYearsDisplayProps} from '../../types/ui'
import './AnimatedYearsDisplay.scss'

export const AnimatedYearsDisplay: React.FC<AnimatedYearsDisplayProps> = ({
	startYear,
	endYear,
	className,
}) => {
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

	return (
		<div className={`animated-years-display ${className || ''}`}>
			<span
				ref={startYearRef}
				className='animated-years-display__year animated-years-display__year--start'
			>
				{currentStartYear}
			</span>
			<span
				ref={endYearRef}
				className='animated-years-display__year animated-years-display__year--end'
			>
				{currentEndYear}
			</span>
		</div>
	)
}
