import React from 'react'
import {useTimelineNavigation} from '../../features/timeline-navigation'
import {useBreakpoints} from '../../shared/lib/hooks'
import type {TimelineWidgetProps} from '../../shared/types/ui'
import {
	AnimatedYearsDisplay,
	CircleNavigation,
	CircleNavigationControls,
	SliderNavigation,
	TimelineSlider,
	YearsDisplay,
} from '../../shared/ui'
import './TimelineWidget.scss'

export const TimelineWidget: React.FC<TimelineWidgetProps> = ({
	data,
	className,
}) => {
	const {activeIndex, navigateToIndex, navigateNext, navigatePrev} =
		useTimelineNavigation(data.length)
	const {isMobile} = useBreakpoints()

	const handlePeriodChange = (index: number) => {
		navigateToIndex(index)
	}

	const handleNext = () => {
		navigateNext()
	}

	const handlePrev = () => {
		navigatePrev()
	}

	const activeData = data[activeIndex]

	return (
		<div className={`timeline-widget ${className || ''}`}>
			<div className='timeline-widget__container'>
				<div className='timeline-widget__header'>
					<h1 className='timeline-widget__main-title'>{activeData.title}</h1>
				</div>

				<div className='timeline-widget__content'>
					<div className='timeline-widget__mobile-nav'>
						{data.map((_, index) => (
							<button
								key={index}
								className={`timeline-widget__mobile-dot ${
									index === activeIndex
										? 'timeline-widget__mobile-dot--active'
										: ''
								}`}
								onClick={() => handlePeriodChange(index)}
								aria-label={`Перейти к периоду ${data[index].title}`}
							/>
						))}
					</div>
					<div className='timeline-widget__mobile-years'>
						<YearsDisplay
							startYear={activeData.startYear}
							endYear={activeData.endYear}
							className='timeline-widget__years'
						/>
					</div>

					<div className='timeline-widget__circle-section'>
						<div className='timeline-widget__circle-left'></div>

						<div className='timeline-widget__circle-container'>
							<CircleNavigation
								totalItems={data.length}
								activeIndex={activeIndex}
								onItemClick={handlePeriodChange}
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
								onPrevious={handlePrev}
								onNext={handleNext}
								enableKeyboardNavigation={false}
							/>
						</div>
					</div>

					<div className='timeline-widget__slider'>
						<TimelineSlider events={activeData.events} />
					</div>
					{isMobile && (
						<SliderNavigation
							activeIndex={activeIndex}
							totalItems={data.length}
							onPrevious={handlePrev}
							onNext={handleNext}
							className='timeline-widget__mobile-navigation'
							isMobile={true}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
