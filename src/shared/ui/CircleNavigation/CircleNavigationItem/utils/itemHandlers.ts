export const createItemHandlers = (
	isActive: boolean,
	setIsHovered: (hovered: boolean) => void,
	animateButton: (element: HTMLElement) => void,
	onClick: () => void,
) => ({
	handleMouseEnter: () => {
		if (!isActive) {
			setIsHovered(true)
		}
	},
	handleMouseLeave: () => setIsHovered(false),
	handleClick: (element: HTMLElement | null) => {
		if (element) {
			animateButton(element)
		}
		onClick()
	},
})
