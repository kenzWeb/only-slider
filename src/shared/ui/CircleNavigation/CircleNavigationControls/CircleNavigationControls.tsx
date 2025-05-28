import React from 'react'
import type {CircleNavigationControlsProps} from '../../../types/ui'
import './CircleNavigationControls.scss'
import {NavigationButton, SlideCounter} from './components'
import {useNavigationControls} from './hooks'
import {getControlsClassName} from './utils'

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
	const {currentSlide, isUpdating} = useNavigationControls(
		activeIndex,
		onPrevious,
		onNext,
		enableKeyboardNavigation,
	)

	return (
		<div className={getControlsClassName(className)}>
			<SlideCounter
				current={currentSlide}
				total={totalItems}
				isUpdating={isUpdating}
			/>

			<div className='circle-navigation-controls__buttons'>
				<NavigationButton
					onClick={onPrevious}
					direction='prev'
					aria-label='Предыдущий период'
				/>

				<NavigationButton
					onClick={onNext}
					direction='next'
					aria-label='Следующий период'
					style={{transform: 'rotate(180deg)'}}
				/>
			</div>
		</div>
	)
}
