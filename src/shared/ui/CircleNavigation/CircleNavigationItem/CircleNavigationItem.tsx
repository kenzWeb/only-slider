import React, {useEffect, useRef, useState} from 'react'
import {useAnimations} from '../../../lib/hooks'
import type {CircleNavigationItemProps} from '../../../types/ui'
import './CircleNavigationItem.scss'
import {createItemHandlers, getItemClassName} from './utils'

export const CircleNavigationItem: React.FC<CircleNavigationItemProps> = ({
	index,
	isActive,
	label,
	onClick,
	style,
	rotationOffset = 0,
}) => {
	const [isHovered, setIsHovered] = useState(false)
	const itemRef = useRef<HTMLButtonElement>(null)
	const {animateItem, animateButton} = useAnimations()

	const handlers = createItemHandlers(
		isActive,
		setIsHovered,
		animateButton,
		onClick,
	)

	useEffect(() => {
		if (!itemRef.current) return
		animateItem(itemRef.current, rotationOffset)
	}, [rotationOffset, animateItem])

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
			<span className='circle-navigation-item__number'>{index + 1}</span>
			{isActive && (
				<span className='circle-navigation-item__label'>{label}</span>
			)}
		</button>
	)
}
