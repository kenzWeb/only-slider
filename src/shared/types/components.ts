import type {ReactNode} from 'react'

export interface BaseComponentProps {
	className?: string
	children?: ReactNode
}

export interface AnimatedComponentProps extends BaseComponentProps {
	animationDuration?: number
	animationEase?: string
}

export interface InteractiveComponentProps extends BaseComponentProps {
	disabled?: boolean
	onClick?: () => void
	onHover?: () => void
	onFocus?: () => void
}

export interface LoadingComponentProps extends BaseComponentProps {
	isLoading?: boolean
	loadingText?: string
}

export type NavigationDirection =
	| 'prev'
	| 'next'
	| 'up'
	| 'down'
	| 'left'
	| 'right'

export type ComponentSize = 'small' | 'medium' | 'large'

export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

export type ComponentPosition = 'top' | 'bottom' | 'left' | 'right' | 'center'
