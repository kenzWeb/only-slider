export const formatSlideCounter = (current: number, total: number): string => {
	const paddedCurrent = current.toString().padStart(2, '0')
	const paddedTotal = total.toString().padStart(2, '0')
	return `${paddedCurrent}/${paddedTotal}`
}

export const formatYearRange = (startYear: number, endYear: number): string => {
	return `${startYear} - ${endYear}`
}

export const formatItemLabel = (label: string, maxLength?: number): string => {
	if (!maxLength || label.length <= maxLength) {
		return label
	}
	return `${label.slice(0, maxLength)}...`
}

export const formatRotationAngle = (
	index: number,
	totalItems: number,
): number => {
	return (index * 360) / totalItems
}
