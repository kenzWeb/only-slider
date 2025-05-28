import React, {CSSProperties} from 'react'

interface NavigationButtonProps {
	onClick: () => void
	direction: 'prev' | 'next'
	'aria-label': string
	style?: CSSProperties
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
	onClick,
	direction,
	'aria-label': ariaLabel,
	style,
}) => (
	<button
		onClick={onClick}
		className={`circle-navigation-controls__button circle-navigation-controls__button--${direction}`}
		aria-label={ariaLabel}
		style={style}
	>
		<img src='/prevArrow.svg' alt='' />
	</button>
)
