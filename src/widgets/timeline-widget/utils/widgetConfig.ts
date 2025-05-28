export const createWidgetConfig = (isMobile: boolean) => ({
	showCircleNavigation: !isMobile,
	showMobileNavigation: isMobile,
	enableKeyboardNavigation: !isMobile,
	animationDuration: isMobile ? 600 : 1400,
})

export const getResponsiveBreakpoint = (): 'mobile' | 'tablet' | 'desktop' => {
	const width = window.innerWidth
	if (width <= 480) return 'mobile'
	if (width <= 768) return 'tablet'
	return 'desktop'
}

export const shouldShowComponent = (
	component: 'circle' | 'mobile' | 'years',
	isMobile: boolean,
): boolean => {
	switch (component) {
		case 'circle':
			return !isMobile
		case 'mobile':
			return isMobile
		case 'years':
			return true
		default:
			return true
	}
}
