import React from 'react'
import type {WidgetHeaderProps} from '../types'

export const WidgetHeader: React.FC<WidgetHeaderProps> = ({title}) => (
	<div className='timeline-widget__header'>
		<h1 className='timeline-widget__main-title'>{title}</h1>
	</div>
)
