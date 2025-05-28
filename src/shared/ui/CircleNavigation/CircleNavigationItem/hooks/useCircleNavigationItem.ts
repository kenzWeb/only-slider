import {useEffect, useRef, useState} from 'react'
import {useAnimations} from '../../../../lib/hooks'

export const useCircleNavigationItem = (rotationOffset: number) => {
	const [isHovered, setIsHovered] = useState(false)
	const itemRef = useRef<HTMLButtonElement>(null)
	const {animateItem, animateButton} = useAnimations()

	useEffect(() => {
		if (!itemRef.current) return
		animateItem(itemRef.current, rotationOffset)
	}, [rotationOffset, animateItem])

	return {
		isHovered,
		setIsHovered,
		itemRef,
		animateButton,
	}
}
