import React from 'react'
import {mockTimelineData} from '../../entities/timeline'
import {TimelineWidget} from '../../widgets/timeline-widget'
import './MainPage.scss'

export const MainPage: React.FC = () => {
	return (
		<div className='main-page'>
			<TimelineWidget data={mockTimelineData} />
		</div>
	)
}
