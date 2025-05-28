import React from 'react'

interface NavigationButtonProps {
	onClick: () => void
	direction: 'prev' | 'next'
	'aria-label': string
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
	onClick,
	direction,
	'aria-label': ariaLabel,
}) => (
	<button
		onClick={onClick}
		className={`circle-navigation-controls__button circle-navigation-controls__button--${direction}`}
		aria-label={ariaLabel}
	>
		<svg
			className='circle-navigation-controls__arrow'
			width='50'
			height='50'
			viewBox='0 0 50 50'
			fill='none'
		>
			<path
				d={
					direction === 'prev'
						? 'M27.4375 18.75L21.5625 25L27.4375 31.25'
						: 'M21.5625 18.75L27.4375 25L21.5625 31.25'
				}
				stroke='#42567A'
				strokeWidth='2'
			/>
		</svg>
	</button>
)
