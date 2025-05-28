import React from 'react'
import type {AnimatedYearsDisplayProps} from '../../types/ui'
import './AnimatedYearsDisplay.scss'
import {YearDisplay} from './components'
import {useAnimatedYears} from './hooks'

export const AnimatedYearsDisplay: React.FC<AnimatedYearsDisplayProps> = ({
	startYear,
	endYear,
	className,
}) => {
	const {currentStartYear, currentEndYear, startYearRef, endYearRef} =
		useAnimatedYears(startYear, endYear)

	return (
		<div className={`animated-years-display ${className || ''}`}>
			<YearDisplay ref={startYearRef} year={currentStartYear} type='start' />
			<YearDisplay ref={endYearRef} year={currentEndYear} type='end' />
		</div>
	)
}
