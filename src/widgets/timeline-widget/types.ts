import type {TimelineData, TimelineEvent} from '../../shared/types/timeline'

export interface WidgetHeaderProps {
	title: string
	className?: string
}

export interface MobileYearsSectionProps {
	startYear: number
	endYear: number
	className?: string
}

export interface CircleSectionProps {
	data: TimelineData[]
	activeIndex: number
	activeData: TimelineData
	onItemClick: (index: number) => void
	onPrevious: () => void
	onNext: () => void
}

export interface SliderSectionProps {
	events: TimelineEvent[]
	isAnimating: boolean
	animationKey: number
}

export interface MobileNavigationSectionProps {
	activeIndex: number
	totalItems: number
	onPrevious: () => void
	onNext: () => void
	isAnimating: boolean
	animationKey: number
	className?: string
}

export interface MobileDotNavigationProps {
	totalItems: number
	activeIndex: number
	onDotClick: (index: number) => void
	className?: string
}
