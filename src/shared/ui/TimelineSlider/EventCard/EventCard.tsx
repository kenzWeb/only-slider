import React from 'react'
import type {EventCardProps} from '../../../types/ui'
import './EventCard.scss'

export const EventCard: React.FC<EventCardProps> = ({event, className}) => {
	return (
		<div className={`event-card ${className || ''}`}>
			<div className='event-card__year'>{event.year}</div>
			<div className='event-card__content'>
				<h3 className='event-card__title'>{event.title}</h3>
				<p className='event-card__description'>{event.description}</p>
			</div>
		</div>
	)
}
