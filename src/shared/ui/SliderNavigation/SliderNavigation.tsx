import React, {useEffect} from 'react'
import type {SliderNavigationProps} from '../../types/ui'
import './SliderNavigation.scss'

export const SliderNavigation: React.FC<SliderNavigationProps> = ({
	activeIndex,
	totalItems,
	onPrevious,
	onNext,
	className,
	enableKeyboardNavigation = true,
	isMobile = false,
}) => {
	useEffect(() => {
		if (!enableKeyboardNavigation) return

		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowLeft':
					event.preventDefault()
					onPrevious()
					break
				case 'ArrowRight':
					event.preventDefault()
					onNext()
					break
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onPrevious, onNext, enableKeyboardNavigation])

	const navigationClasses = [
		'slider-navigation',
		isMobile ? 'slider-navigation--mobile' : '',
		className || '',
	]
		.filter(Boolean)
		.join(' ')

	return (
		<div className={navigationClasses}>
			<div className='slider-navigation__buttons'>
				<button
					className='slider-navigation__button slider-navigation__button--prev'
					onClick={onPrevious}
					disabled={activeIndex === 0}
					aria-label='Предыдущий'
				>
					<img
						src='/miniPrevArrow.svg'
						alt='Previous'
						className='slider-navigation__arrow'
					/>
				</button>

				<button
					className='slider-navigation__button slider-navigation__button--next'
					onClick={onNext}
					disabled={activeIndex === totalItems - 1}
					aria-label='Следующий'
				>
					<img
						src='/miniPrevArrow.svg'
						alt='Next'
						className='slider-navigation__arrow slider-navigation__arrow--next'
					/>
				</button>
			</div>
		</div>
	)
}
