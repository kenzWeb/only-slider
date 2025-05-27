import {forwardRef} from 'react'
import './PeriodTitle.scss'

interface PeriodTitleProps {
	title: string
	className?: string
}

export const PeriodTitle = forwardRef<HTMLHeadingElement, PeriodTitleProps>(
	({title, className}, ref) => {
		return (
			<h2 className={`period-title ${className || ''}`} ref={ref}>
				{title}
			</h2>
		)
	},
)

PeriodTitle.displayName = 'PeriodTitle'
