import React from 'react'
import {AnimatedYearsDisplay} from '../../../shared/ui'
import type {MobileYearsSectionProps} from '../types'

export const MobileYearsSection: React.FC<MobileYearsSectionProps> = ({
	startYear,
	endYear,
}) => (
	<div className='timeline-widget__mobile-years'>
		<AnimatedYearsDisplay
			startYear={startYear}
			endYear={endYear}
			className='timeline-widget__years'
		/>
	</div>
)
