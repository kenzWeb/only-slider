export const getItemClassName = (
	isActive: boolean,
	isHovered: boolean,
): string => {
	const baseClass = 'circle-navigation-item'
	const activeClass = isActive ? `${baseClass}--active` : ''
	const hoveredClass = isHovered ? `${baseClass}--hovered` : ''

	return [baseClass, activeClass, hoveredClass].filter(Boolean).join(' ')
}
