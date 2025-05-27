import React, {useEffect, useRef} from 'react'
import {useAnimations, useCirclePositions} from '../../lib/hooks'
import type {CircleNavigationProps} from '../../types/ui'
import './CircleNavigation.scss'
import {CircleNavigationItem} from './CircleNavigationItem'

export const CircleNavigation: React.FC<CircleNavigationProps> = ({
	totalItems,
	activeIndex,
	onItemClick,
	labels,
}) => {
	const circleRef = useRef<HTMLDivElement>(null)
	const positions = useCirclePositions({totalItems})
	const {animateCircle} = useAnimations()

	useEffect(() => {
		if (!circleRef.current) return

		animateCircle(circleRef.current, activeIndex, totalItems)
	}, [totalItems, activeIndex, animateCircle])

	const handleItemClick = (index: number) => {
		onItemClick(index)
	}

	return (
		<div className='circle-navigation'>
			<div className='circle-navigation__circle' ref={circleRef}>
				{Array.from({length: totalItems}, (_, index) => (
					<CircleNavigationItem
						key={index}
						index={index}
						isActive={index === activeIndex}
						label={labels[index]}
						onClick={() => handleItemClick(index)}
						rotationOffset={(activeIndex * 360) / totalItems}
						style={{
							left: positions[index]?.x,
							top: positions[index]?.y,
						}}
					/>
				))}
			</div>
		</div>
	)
}
