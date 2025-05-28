import {useCallback} from 'react'
import {useBreakpoints} from '../../../shared/lib/hooks'

export const useResponsiveNavigation = () => {
	const {isMobile, isTablet} = useBreakpoints()

	const getNavigationType = useCallback(() => {
		if (isMobile) return 'mobile'
		if (isTablet) return 'tablet'
		return 'desktop'
	}, [isMobile, isTablet])

	const shouldUseCircleNavigation = useCallback(() => {
		return !isMobile
	}, [isMobile])

	const getAnimationDuration = useCallback(() => {
		return isMobile ? 600 : 1400
	}, [isMobile])

	return {
		isMobile,
		isTablet,
		navigationType: getNavigationType(),
		shouldUseCircleNavigation: shouldUseCircleNavigation(),
		animationDuration: getAnimationDuration(),
	}
}
