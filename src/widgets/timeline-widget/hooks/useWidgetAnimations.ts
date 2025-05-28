import {useCallback, useRef} from 'react'
import {useAnimations} from '../../../shared/lib/hooks'

export const useWidgetAnimations = () => {
	const {animateAppear, animateDisappear, cleanup} = useAnimations()
	const widgetRef = useRef<HTMLDivElement>(null)

	const animateWidgetAppear = useCallback(() => {
		if (widgetRef.current) {
			animateAppear(widgetRef.current)
		}
	}, [animateAppear])

	const animateWidgetDisappear = useCallback(
		(onComplete?: () => void) => {
			if (widgetRef.current) {
				animateDisappear(widgetRef.current, onComplete)
			}
		},
		[animateDisappear],
	)

	return {
		widgetRef,
		animateWidgetAppear,
		animateWidgetDisappear,
		cleanup,
	}
}
