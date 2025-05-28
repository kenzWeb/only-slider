import {forwardRef} from 'react'

interface YearDisplayProps {
	year: number
	type: 'start' | 'end'
}

export const YearDisplay = forwardRef<HTMLSpanElement, YearDisplayProps>(
	({year, type}, ref) => (
		<span
			ref={ref}
			className={`animated-years-display__year animated-years-display__year--${type}`}
		>
			{year}
		</span>
	),
)

YearDisplay.displayName = 'YearDisplay'
