import React from 'react'
import type {CircleNavigationItemProps} from '../../../types/ui'
import './CircleNavigationItem.scss'
import {ItemLabel, ItemNumber} from './components'
import {useCircleNavigationItem} from './hooks'
import {createItemHandlers, getItemClassName} from './utils'

export const CircleNavigationItem: React.FC<CircleNavigationItemProps> = ({
	index,
	isActive,
	label,
	onClick,
	style,
	rotationOffset = 0,
}) => {
	const {isHovered, setIsHovered, itemRef, animateButton} =
		useCircleNavigationItem(rotationOffset)

	const handlers = createItemHandlers(
		isActive,
		setIsHovered,
		animateButton,
		onClick,
	)

	return (
		<button
			ref={itemRef}
			className={getItemClassName(isActive, isHovered)}
			onClick={() => handlers.handleClick(itemRef.current)}
			onMouseEnter={handlers.handleMouseEnter}
			onMouseLeave={handlers.handleMouseLeave}
			style={style}
			aria-label={`Перейти к ${label}`}
		>
			<ItemNumber number={index + 1} />
			<ItemLabel label={label} isVisible={isActive} />
		</button>
	)
}
