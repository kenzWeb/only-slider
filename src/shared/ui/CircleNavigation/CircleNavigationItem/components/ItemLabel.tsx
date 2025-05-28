import React from 'react'

interface ItemLabelProps {
	label: string
	isVisible: boolean
}

export const ItemLabel: React.FC<ItemLabelProps> = ({label, isVisible}) =>
	isVisible ? (
		<span className='circle-navigation-item__label'>{label}</span>
	) : null
