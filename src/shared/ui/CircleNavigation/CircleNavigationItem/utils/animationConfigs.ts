export const createHoverAnimationConfig = (isActive: boolean) => ({
	scale: isActive ? 1.1 : 1.05,
	duration: 0.2,
	ease: 'power2.out',
})

export const createActiveAnimationConfig = (isActive: boolean) => ({
	scale: isActive ? 1.2 : 1,
	opacity: isActive ? 1 : 0.7,
	duration: 0.3,
	ease: 'power2.out',
})

export const createRotationAnimationConfig = (rotationOffset: number) => ({
	rotation: rotationOffset,
	duration: 1.4,
	ease: 'power2.out',
})

export const createPressAnimationConfig = () => ({
	scale: 0.95,
	duration: 0.1,
	ease: 'power2.out',
})
