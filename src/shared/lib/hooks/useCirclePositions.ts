import {useEffect, useState} from 'react'
import {BREAKPOINTS, CIRCLE_CONFIG} from '../constants'
import { CirclePosition, UseCirclePositionsParams } from '../../types/hooks'

const getResponsiveConfig = () => {
	const width = window.innerWidth

	if (width <= BREAKPOINTS.MOBILE) {
		return {
			radius: CIRCLE_CONFIG.RADIUS_MOBILE,
			centerX: CIRCLE_CONFIG.CENTER_X_MOBILE,
			centerY: CIRCLE_CONFIG.CENTER_Y_MOBILE,
		}
	}

	if (width <= 600) {
		return {
			radius: CIRCLE_CONFIG.RADIUS_SMALL,
			centerX: CIRCLE_CONFIG.CENTER_X_SMALL,
			centerY: CIRCLE_CONFIG.CENTER_Y_SMALL,
		}
	}

	if (width <= BREAKPOINTS.TABLET) {
		return {
			radius: CIRCLE_CONFIG.RADIUS_SMALL,
			centerX: CIRCLE_CONFIG.CENTER_X_SMALL,
			centerY: CIRCLE_CONFIG.CENTER_Y_SMALL,
		}
	}

	if (width <= 900) {
		return {
			radius: CIRCLE_CONFIG.RADIUS_MEDIUM,
			centerX: CIRCLE_CONFIG.CENTER_X_MEDIUM,
			centerY: CIRCLE_CONFIG.CENTER_Y_MEDIUM,
		}
	}

	if (width <= BREAKPOINTS.DESKTOP) {
		return {
			radius: CIRCLE_CONFIG.RADIUS_TABLET,
			centerX: CIRCLE_CONFIG.CENTER_X_TABLET,
			centerY: CIRCLE_CONFIG.CENTER_Y_TABLET,
		}
	}

	return {
		radius: CIRCLE_CONFIG.RADIUS,
		centerX: CIRCLE_CONFIG.CENTER_X,
		centerY: CIRCLE_CONFIG.CENTER_Y,
	}
}

export const useCirclePositions = ({
	totalItems,
	radius,
	centerX,
	centerY,
	startAngle = CIRCLE_CONFIG.START_ANGLE,
}: UseCirclePositionsParams) => {
	const [positions, setPositions] = useState<CirclePosition[]>([])

	useEffect(() => {
		const updatePositions = () => {
			const config = getResponsiveConfig()
			const actualRadius = radius ?? config.radius
			const actualCenterX = centerX ?? config.centerX
			const actualCenterY = centerY ?? config.centerY

			const newPositions: CirclePosition[] = []

			for (let i = 0; i < totalItems; i++) {
				const angle = (i * 360) / totalItems + startAngle
				const radian = (angle * Math.PI) / 180

				const x = actualCenterX + actualRadius * Math.cos(radian)
				const y = actualCenterY + actualRadius * Math.sin(radian)

				newPositions.push({x, y})
			}

			setPositions(newPositions)
		}

		updatePositions()

		const handleResize = () => updatePositions()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [totalItems, radius, centerX, centerY, startAngle])

	return positions
}
