import {forwardRef, useRef} from 'react'
import {useAnimations} from '../../../lib/hooks'
import './SliderButton.scss'

interface SliderButtonProps {
	direction: 'prev' | 'next'
	disabled?: boolean
	onClick?: () => void
	className?: string
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
	({direction, disabled = false, onClick, className}, ref) => {
		const internalRef = useRef<HTMLButtonElement>(null)
		const buttonRef = ref || internalRef
		const {animateButton} = useAnimations()

		const ariaLabel =
			direction === 'prev' ? 'Предыдущее событие' : 'Следующее событие'

		const handleClick = () => {
			if (buttonRef && 'current' in buttonRef && buttonRef.current) {
				animateButton(buttonRef.current)
			}
			onClick?.()
		}

		return (
			<button
				ref={buttonRef}
				className={`slider-button slider-button--${direction} ${
					className || ''
				}`}
				aria-label={ariaLabel}
				disabled={disabled}
				onClick={handleClick}
			>
				<svg width='8' height='12' viewBox='0 0 8 12' fill='none'>
					{direction === 'prev' ? (
						<path d='M7 1L2 6L7 11' stroke='currentColor' strokeWidth='2' />
					) : (
						<path d='M1 1L6 6L1 11' stroke='currentColor' strokeWidth='2' />
					)}
				</svg>
			</button>
		)
	},
)

SliderButton.displayName = 'SliderButton'
