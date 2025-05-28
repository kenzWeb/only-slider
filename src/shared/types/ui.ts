import type {CSSProperties} from 'react'
import type {TimelineData, TimelineEvent} from './timeline'

export interface AnimatedYearsDisplayProps {
	startYear: number
	endYear: number
	className?: string
}

export interface CircleNavigationProps {
	totalItems: number
	activeIndex: number
	onItemClick: (index: number) => void
	labels: string[]
}

export interface CircleNavigationItemProps {
	index: number
	isActive: boolean
	label: string
	onClick: () => void
	style?: CSSProperties
	rotationOffset?: number
}

export interface CircleNavigationControlsProps {
	activeIndex: number
	totalItems: number
	onPrevious: () => void
	onNext: () => void
	className?: string
	enableKeyboardNavigation?: boolean
}

export interface CircleNavigationItemData {
	id: number
	label: string
	period: string
}

export interface PeriodTitleProps {
	title: string
	className?: string
}

export interface SliderNavigationProps {
	activeIndex: number
	totalItems: number
	onPrevious: () => void
	onNext: () => void
	className?: string
	enableKeyboardNavigation?: boolean
	isMobile?: boolean
}

export interface TimelineSliderProps {
	events: TimelineEvent[]
}

export interface EventCardProps {
	event: TimelineEvent
	className?: string
	index?: number
}

export interface SliderButtonProps {
	direction: 'prev' | 'next'
	disabled?: boolean
	onClick?: () => void
	className?: string
}

export interface SliderCounterProps {
	current: number
	total: number
	className?: string
}

export interface YearsDisplayProps {
	startYear: number
	endYear: number
	className?: string
}

export interface TimelineWidgetProps {
	data: TimelineData[]
	className?: string
}
