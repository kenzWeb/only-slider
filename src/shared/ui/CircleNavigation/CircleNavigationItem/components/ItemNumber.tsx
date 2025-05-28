import React from 'react'

interface ItemNumberProps {
	number: number
}

export const ItemNumber: React.FC<ItemNumberProps> = ({number}) => (
	<span className='circle-navigation-item__number'>{number}</span>
)
