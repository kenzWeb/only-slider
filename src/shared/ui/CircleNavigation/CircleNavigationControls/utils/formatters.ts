export const formatSlideNumber = (num: number): string =>
	String(num).padStart(2, '0')

export const getControlsClassName = (className?: string): string =>
	`circle-navigation-controls ${className || ''}`
