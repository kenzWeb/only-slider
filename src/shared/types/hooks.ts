export interface CirclePosition {
	x: number
	y: number
}

export interface UseCirclePositionsParams {
	totalItems: number
	radius?: number
	centerX?: number
	centerY?: number
	startAngle?: number
}

export interface AnimationHookOptions {
	duration?: number
	ease?: string
	onComplete?: () => void
}

export interface UseAnimationsReturn {
	animateYears: (
		startElement: HTMLElement | null,
		endElement: HTMLElement | null,
		fromYears: {start: number; end: number},
		toYears: {start: number; end: number},
		onComplete?: () => void,
	) => object | null

	animateCircle: (
		element: HTMLElement,
		activeIndex: number,
		totalItems: number,
	) => object

	animateItem: (element: HTMLElement, rotationOffset: number) => object

	animateCard: (card: HTMLElement, delay?: number) => object

	animateButton: (button: HTMLElement) => object

	animateAppear: (element: HTMLElement, delay?: number) => void

	animateDisappear: (element: HTMLElement, onComplete?: () => void) => void

	cleanup: () => void

	presets: {
		FAST: number
		NORMAL: number
		SLOW: number
		VERY_SLOW: number
		EASE_OUT: string
		EASE_IN_OUT: string
		BOUNCE: string
		ELASTIC: string
		HOVER_SCALE: number
		ACTIVE_SCALE: number
		PRESS_SCALE: number
	}
}

export interface UseMediaQueryReturn {
	isMobile: boolean
	isTablet: boolean
	isDesktop: boolean
	width: number
	height: number
}

export interface UseBreakpointsReturn {
	isMobile: boolean
	isTablet: boolean
	isDesktop: boolean
	isLarge: boolean
}
