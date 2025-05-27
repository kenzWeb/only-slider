import {gsap} from 'gsap'

export const animateNumberChange = (
	targetElement: HTMLElement,
	fromValue: number,
	toValue: number,
	options: {
		duration?: number
		ease?: string
		onComplete?: () => void
	} = {},
): gsap.core.Tween => {
	const {duration = 1.0, ease = 'power2.out', onComplete} = options

	return gsap.to(
		{value: fromValue},
		{
			value: toValue,
			duration,
			ease,
			onUpdate: function () {
				const roundedValue = Math.round(this.targets()[0].value)
				targetElement.textContent = roundedValue.toString()
			},
			onComplete,
		},
	)
}
