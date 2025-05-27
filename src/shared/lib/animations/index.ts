export * from './numberAnimations'
export * from './circleAnimations'
export * from './sliderAnimations'

export interface AnimationOptions {
	duration?: number
	ease?: string
	delay?: number
	onComplete?: () => void
}

export interface TransformOptions extends AnimationOptions {
	x?: number
	y?: number
	rotation?: number
	scale?: number
	opacity?: number
}

export const ANIMATION_PRESETS = {
	FAST: 0.2,
	NORMAL: 0.3,
	SLOW: 0.6,
	VERY_SLOW: 1.0,

	EASE_OUT: 'power2.out',
	EASE_IN_OUT: 'power2.inOut',
	BOUNCE: 'back.out(1.7)',
	ELASTIC: 'elastic.out(1, 0.5)',

	HOVER_SCALE: 1.1,
	ACTIVE_SCALE: 1.2,
	PRESS_SCALE: 0.95,
} as const
