import React from 'react'
import {TimelineSlider} from '../../../shared/ui'
import type {SliderSectionProps} from '../types'

export const SliderSection: React.FC<SliderSectionProps> = ({
	events,
	isAnimating,
	animationKey,
}) => (
	<div
		key={`slider-${animationKey}`}
		className={`timeline-widget__slider ${isAnimating ? 'animating' : ''}`}
	>
		<TimelineSlider events={events} />
	</div>
)
