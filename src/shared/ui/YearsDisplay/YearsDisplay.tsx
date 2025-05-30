import {forwardRef} from 'react'
import type {YearsDisplayProps} from '../../types/ui'
import './YearsDisplay.scss'

export const YearsDisplay = forwardRef<HTMLDivElement, YearsDisplayProps>(
	({startYear, endYear, className}, ref) => {
		return (
			<div className={`years-display ${className || ''}`} ref={ref}>
				<span className='years-display__year years-display__year--start'>
					{startYear}
				</span>
				<span className='years-display__year years-display__year--end'>
					{endYear}
				</span>
			</div>
		)
	},
)

YearsDisplay.displayName = 'YearsDisplay'
