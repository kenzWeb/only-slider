import React from 'react'
import type {TimelineData} from '../../../shared/types/timeline'

interface MobileDotNavigationProps {
	data: TimelineData[]
	activeIndex: number
	onPeriodChange: (index: number) => void
}

export const MobileDotNavigation: React.FC<MobileDotNavigationProps> = ({
	data,
	activeIndex,
	onPeriodChange,
}) => (
	<div className='timeline-widget__mobile-nav'>
		{data.map((_, index) => (
			<button
				key={index}
				className={`timeline-widget__mobile-dot ${
					index === activeIndex ? 'timeline-widget__mobile-dot--active' : ''
				}`}
				onClick={() => onPeriodChange(index)}
				aria-label={`Перейти к периоду ${data[index].title}`}
			/>
		))}
	</div>
)
