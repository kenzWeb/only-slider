import {forwardRef} from 'react'
import type {PeriodTitleProps} from '../../types/ui'
import './PeriodTitle.scss'

export const PeriodTitle = forwardRef<HTMLHeadingElement, PeriodTitleProps>(
	({title, className}, ref) => (
		<h2 className={`period-title ${className || ''}`} ref={ref}>
			{title}
		</h2>
	),
)

PeriodTitle.displayName = 'PeriodTitle'
