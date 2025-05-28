export const ANIMATION_CONFIG = {
	DURATIONS: {
		FAST: 0.2,
		NORMAL: 0.3,
		SLOW: 0.6,
		VERY_SLOW: 1.0,
		CIRCLE: 1.4,
		MOBILE: 1.0,
		DESKTOP: 1.6,
		MOBILE_TRANSITION: 600,
	},
	EASING: {
		OUT: 'power2.out',
		IN_OUT: 'power2.inOut',
		BOUNCE: 'back.out(1.7)',
		ELASTIC: 'elastic.out(1, 0.5)',
	},
	SCALES: {
		HOVER: 1.1,
		ACTIVE: 1.2,
		PRESS: 0.95,
	},
	ROTATION_DURATION: 1.4,
	CONTENT_CHANGE_DURATION: 0.3,
	CONTENT_CHANGE_EASE: 'power2.out',
} as const
