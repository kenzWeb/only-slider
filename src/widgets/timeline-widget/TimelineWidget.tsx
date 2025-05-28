import React from 'react'
import type {TimelineWidgetProps} from '../../shared/types/ui'
import {
	CircleSection,
	MobileDotNavigation,
	MobileNavigationSection,
	MobileYearsSection,
	SliderSection,
	WidgetHeader,
} from './components'
import {useTimelineWidget} from './hooks'
import './TimelineWidget.scss'

export const TimelineWidget: React.FC<TimelineWidgetProps> = ({
	data,
	className,
}) => {
	const {navigation, animation, handlers, activeData, isMobile} =
		useTimelineWidget(data)

	return (
		<div className={`timeline-widget ${className || ''}`}>
			<div className='timeline-widget__container'>
				<WidgetHeader title='Исторические даты' />

				<div className='timeline-widget__content'>
					<MobileYearsSection
						startYear={activeData.startYear}
						endYear={activeData.endYear}
					/>

					<CircleSection
						data={data}
						activeIndex={navigation.activeIndex}
						activeData={activeData}
						onItemClick={handlers.handlePeriodChange}
						onPrevious={handlers.handlePrev}
						onNext={handlers.handleNext}
					/>

					<SliderSection
						events={activeData.events}
						isAnimating={animation.isAnimating}
						animationKey={animation.animationKey}
					/>

					{isMobile && (
						<MobileNavigationSection
							activeIndex={navigation.activeIndex}
							totalItems={data.length}
							onPrevious={handlers.handlePrev}
							onNext={handlers.handleNext}
							isAnimating={animation.isAnimating}
							animationKey={animation.animationKey}
						/>
					)}

					<MobileDotNavigation
						data={data}
						activeIndex={navigation.activeIndex}
						onPeriodChange={handlers.handlePeriodChange}
					/>
				</div>
			</div>
		</div>
	)
}
