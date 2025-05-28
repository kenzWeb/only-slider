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
} from '../../shared/ui'
import {MobileDotNavigation} from './components'
import {useMobileAnimation} from './hooks'
import './TimelineWidget.scss'
import {createTimelineHandlers} from './utils'

export const TimelineWidget: React.FC<TimelineWidgetProps> = ({
	data,
	className,
}) => {
	const navigation = useTimelineNavigation(data.length)
	const {isMobile} = useBreakpoints()
	const {isAnimating, animationKey} = useMobileAnimation({
		activeIndex: navigation.activeIndex,
		isMobile,
	})
	const handlers = createTimelineHandlers(navigation)

	const activeData = data[navigation.activeIndex]

	return (
		<div className={`timeline-widget ${className || ''}`}>
			<div className='timeline-widget__container'>
				<div className='timeline-widget__header'>
					<h1 className='timeline-widget__main-title'>Исторические даты</h1>
				</div>

				<div className='timeline-widget__content'>
					<div className='timeline-widget__mobile-years'>
						<AnimatedYearsDisplay
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
								activeIndex={navigation.activeIndex}
								onItemClick={handlers.handlePeriodChange}
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
								activeIndex={navigation.activeIndex}
								totalItems={data.length}
								onPrevious={handlers.handlePrev}
								onNext={handlers.handleNext}
								enableKeyboardNavigation={false}
							/>
						</div>
					</div>

					<div
						key={`slider-${animationKey}`}
						className={`timeline-widget__slider ${
							isAnimating ? 'animating' : ''
						}`}
					>
						<TimelineSlider events={activeData.events} />
					</div>
					{isMobile && (
						<SliderNavigation
							key={`mobile-nav-${animationKey}`}
							activeIndex={navigation.activeIndex}
							totalItems={data.length}
							onPrevious={handlers.handlePrev}
							onNext={handlers.handleNext}
							className={`timeline-widget__mobile-navigation ${
								isAnimating ? 'animating' : ''
							}`}
							isMobile={true}
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
