import React from 'react'
import './SliderCounter.scss'

interface SliderCounterProps {
	current: number
	total: number
	className?: string
}

export const SliderCounter: React.FC<SliderCounterProps> = ({
	current,
	total,
	className,
}) => {
	return (
		<span className={`slider-counter ${className || ''}`}>
			{String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
		</span>
	)
}
