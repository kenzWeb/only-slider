export const createAnimationOptions = (duration: number, ease: string) => ({
	duration,
	ease,
})

export const isMobileDevice = (): boolean => window.innerWidth <= 480
