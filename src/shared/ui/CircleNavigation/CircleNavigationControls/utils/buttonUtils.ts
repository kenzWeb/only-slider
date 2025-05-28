export const createAriaLabel = (direction: 'prev' | 'next'): string => {
	return direction === 'prev' ? 'Previous slide' : 'Next slide'
}

export const createButtonClassName = (
	direction: 'prev' | 'next',
	disabled?: boolean,
): string => {
	const baseClass = 'circle-navigation-controls__button'
	const directionClass = `${baseClass}--${direction}`
	const disabledClass = disabled ? `${baseClass}--disabled` : ''

	return [baseClass, directionClass, disabledClass].filter(Boolean).join(' ')
}

export const getSvgPath = (direction: 'prev' | 'next'): string => {
	return direction === 'prev'
		? 'M27.4375 18.75L21.5625 25L27.4375 31.25'
		: 'M21.5625 18.75L27.4375 25L21.5625 31.25'
}
