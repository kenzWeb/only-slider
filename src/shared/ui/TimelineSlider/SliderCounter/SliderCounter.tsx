import React from 'react'
import type {SliderCounterProps} from '../../../types/ui'
import './SliderCounter.scss'

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
