import {useTimelineNavigation} from '../../../features/timeline-navigation'
import {useBreakpoints} from '../../../shared/lib/hooks'
import type {TimelineData} from '../../../shared/types/timeline'
import {createTimelineHandlers} from '../utils'
import {useMobileAnimation} from './useMobileAnimation'

export const useTimelineWidget = (data: TimelineData[]) => {
	const navigation = useTimelineNavigation(data.length)
	const {isMobile} = useBreakpoints()
	const animation = useMobileAnimation({
		activeIndex: navigation.activeIndex,
		isMobile,
	})
	const handlers = createTimelineHandlers(navigation)
	const activeData = data[navigation.activeIndex]

	return {
		navigation,
		animation,
		handlers,
		activeData,
		isMobile,
	}
}
