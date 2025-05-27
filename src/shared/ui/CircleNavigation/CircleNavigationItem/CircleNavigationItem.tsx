import React, {useEffect, useRef, useState} from 'react'
import {useAnimations} from '../../../lib/hooks'
import './CircleNavigationItem.scss'

interface CircleNavigationItemProps {
	index: number
	isActive: boolean
	label: string
	onClick: () => void
	style?: React.CSSProperties
	rotationOffset?: number
}

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

	useEffect(() => {
		if (!itemRef.current) return

		
		animateItem(itemRef.current, rotationOffset)
	}, [rotationOffset, animateItem])

	const handleMouseEnter = () => {
		if (!isActive) {
			setIsHovered(true)
		}
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const handleClick = () => {
		if (itemRef.current) {
			animateButton(itemRef.current)
		}
		onClick()
	}

	return (
		<button
			ref={itemRef}
			className={`circle-navigation-item ${
				isActive ? 'circle-navigation-item--active' : ''
			} ${isHovered ? 'circle-navigation-item--hovered' : ''}`}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
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
