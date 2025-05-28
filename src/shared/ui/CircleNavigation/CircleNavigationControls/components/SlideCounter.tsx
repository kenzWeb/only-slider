import React from 'react'

interface SlideCounterProps {
	current: number
	total: number
	isUpdating: boolean
}

export const SlideCounter: React.FC<SlideCounterProps> = ({
	current,
	total,
	isUpdating,
}) => (
	<div className='circle-navigation-controls__counter'>
		<span
			className={`circle-navigation-controls__current ${
				isUpdating ? 'updating' : ''
			}`}
		>
			{String(current).padStart(2, '0')}
		</span>
		<span className='circle-navigation-controls__separator'>/</span>
		<span className='circle-navigation-controls__total'>
			{String(total).padStart(2, '0')}
		</span>
	</div>
)
