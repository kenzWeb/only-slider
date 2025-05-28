import React from 'react'
import {SliderNavigation} from '../../../shared/ui'
import type {MobileNavigationSectionProps} from '../types'

export const MobileNavigationSection: React.FC<
	MobileNavigationSectionProps
> = ({
	activeIndex,
	totalItems,
	onPrevious,
	onNext,
	isAnimating,
	animationKey,
}) => (
	<SliderNavigation
		key={`mobile-nav-${animationKey}`}
		activeIndex={activeIndex}
		totalItems={totalItems}
		onPrevious={onPrevious}
		onNext={onNext}
		className={`timeline-widget__mobile-navigation ${
			isAnimating ? 'animating' : ''
		}`}
		isMobile={true}
	/>
)
