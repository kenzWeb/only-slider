import React, {useEffect, useRef, useState} from 'react'
import './CircleNavigationControls.scss'

interface CircleNavigationControlsProps {
	activeIndex: number
	totalItems: number
	onPrevious: () => void
	onNext: () => void
	className?: string
	enableKeyboardNavigation?: boolean
}

export const CircleNavigationControls: React.FC<
	CircleNavigationControlsProps
> = ({
	activeIndex,
	totalItems,
	onPrevious,
	onNext,
	className,
	enableKeyboardNavigation = true,
}) => {
	const currentSlide = activeIndex + 1
	const [isUpdating, setIsUpdating] = useState(false)
	const prevSlideRef = useRef(currentSlide)

	useEffect(() => {
		if (prevSlideRef.current !== currentSlide) {
			setIsUpdating(true)
			const timer = setTimeout(() => {
				setIsUpdating(false)
				prevSlideRef.current = currentSlide
			}, 200)
			return () => clearTimeout(timer)
		}
	}, [currentSlide])

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

	return (
		<div className={`circle-navigation-controls ${className || ''}`}>
			<div className='circle-navigation-controls__counter'>
				<span
					className={`circle-navigation-controls__current ${
						isUpdating ? 'updating' : ''
					}`}
				>
					{currentSlide}
				</span>
				<span className='circle-navigation-controls__separator'>/</span>
				<span className='circle-navigation-controls__total'>{totalItems}</span>
			</div>

			<div className='circle-navigation-controls__buttons'>
				<button
					className='circle-navigation-controls__button circle-navigation-controls__button--prev'
					onClick={onPrevious}
					disabled={activeIndex === 0}
					aria-label='Предыдущий период'
				>
					<img
						src='/prevArrow.svg'
						alt='Previous'
						className='circle-navigation-controls__arrow'
					/>
				</button>

				<button
					className='circle-navigation-controls__button circle-navigation-controls__button--next'
					onClick={onNext}
					disabled={activeIndex === totalItems - 1}
					aria-label='Следующий период'
				>
					<img
						src='/prevArrow.svg'
						alt='Next'
						className='circle-navigation-controls__arrow circle-navigation-controls__arrow--next'
					/>
				</button>
			</div>
		</div>
	)
}
