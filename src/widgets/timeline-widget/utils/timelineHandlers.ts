import type {TimelineNavigationReturn} from '../../../features/timeline-navigation'

export const createTimelineHandlers = (
	navigation: TimelineNavigationReturn,
) => ({
	handlePeriodChange: (index: number) => navigation.navigateToIndex(index),
	handleNext: () => navigation.navigateNext(),
	handlePrev: () => navigation.navigatePrev(),
})
