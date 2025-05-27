import React, {useEffect, useRef, useState} from 'react'
import {useAnimations} from '../../lib/hooks'
import './AnimatedYearsDisplay.scss'

interface AnimatedYearsDisplayProps {
	startYear: number
	endYear: number
	className?: string
}

export const AnimatedYearsDisplay: React.FC<AnimatedYearsDisplayProps> = ({
	startYear,
	endYear,
	className,
}) => {
	const [currentStartYear, setCurrentStartYear] = useState(startYear)
	const [currentEndYear, setCurrentEndYear] = useState(endYear)
	const startYearRef = useRef<HTMLSpanElement>(null)
	const endYearRef = useRef<HTMLSpanElement>(null)
	
	const animateYears = () => {
		// TODO: заменить на useAnimations hook
	}

	useEffect(() => {
		if (startYear === currentStartYear && endYear === currentEndYear) return
		
		// TODO: implement animation
		setCurrentStartYear(startYear)
		setCurrentEndYear(endYear)
	}, [startYear, endYear, currentStartYear, currentEndYear])

	return (
		<div className={className}>
			<span ref={startYearRef}>{currentStartYear}</span>
			<span ref={endYearRef}>{currentEndYear}</span>
		</div>
	)
}
