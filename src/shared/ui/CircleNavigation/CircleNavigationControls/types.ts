export interface NavigationButtonProps {
	onClick: () => void
	direction: 'prev' | 'next'
	'aria-label': string
	disabled?: boolean
	className?: string
}

export interface SlideCounterProps {
	currentSlide: number
	totalSlides: number
	isUpdating: boolean
	className?: string
}
