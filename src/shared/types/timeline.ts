export interface TimelineEvent {
	year: number
	title: string
	description: string
}

export interface TimelineData {
	id: number
	title: string
	startYear: number
	endYear: number
	events: TimelineEvent[]
}
