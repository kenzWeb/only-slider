// Default animation durations (in seconds)
export const ANIMATION_DURATIONS = {
	FAST: 0.3,
	NORMAL: 0.6,
	SLOW: 1.0,
	VERY_SLOW: 1.5,
} as const

// Common easing functions
export const EASING = {
	EASE_OUT: 'power2.out',
	EASE_IN_OUT: 'power2.inOut',
	EASE_IN: 'power2.in',
	BOUNCE: 'bounce.out',
	ELASTIC: 'elastic.out(1, 0.3)',
	BACK: 'back.out(1.7)',
} as const

// Animation preset configurations
export const ANIMATION_PRESETS = {
	SMOOTH_ROTATION: {
		duration: ANIMATION_DURATIONS.SLOW,
		ease: EASING.EASE_OUT,
	},
	QUICK_FADE: {
		duration: ANIMATION_DURATIONS.FAST,
		ease: EASING.EASE_OUT,
	},
	YEAR_CHANGE: {
		duration: ANIMATION_DURATIONS.VERY_SLOW,
		ease: EASING.EASE_OUT,
	},
	BUTTON_PRESS: {
		duration: ANIMATION_DURATIONS.FAST,
		ease: EASING.BACK,
	},
} as const
