import React from 'react'
import {
	AnimatedYearsDisplay,
	CircleNavigation,
	CircleNavigationControls,
} from '../../../shared/ui'
import type {CircleSectionProps} from '../types'

export const CircleSection: React.FC<CircleSectionProps> = ({
	data,
	activeIndex,
	activeData,
	onItemClick,
	onPrevious,
	onNext,
}) => (
	<div className='timeline-widget__circle-section'>
		<div className='timeline-widget__circle-left'></div>

		<div className='timeline-widget__circle-container'>
			<CircleNavigation
				totalItems={data.length}
				activeIndex={activeIndex}
				onItemClick={onItemClick}
				labels={data.map((item) => item.title)}
			/>
			<div className='timeline-widget__circle-center'>
				<AnimatedYearsDisplay
					startYear={activeData.startYear}
					endYear={activeData.endYear}
					className='timeline-widget__years'
				/>
			</div>
		</div>

		<div className='timeline-widget__circle-pagination'>
			<CircleNavigationControls
				activeIndex={activeIndex}
				totalItems={data.length}
				onPrevious={onPrevious}
				onNext={onNext}
				enableKeyboardNavigation={false}
			/>
		</div>
	</div>
)
