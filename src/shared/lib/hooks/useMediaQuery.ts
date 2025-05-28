import {useEffect, useState} from 'react'
import {BREAKPOINTS} from '../constants'

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)

		if (media.matches !== matches) {
			setMatches(media.matches)
		}

		const listener = () => setMatches(media.matches)

		if (typeof media.addEventListener === 'function') {
			media.addEventListener('change', listener)
		} else {
			media.addListener(listener)
		}

		return () => {
			if (typeof media.removeEventListener === 'function') {
				media.removeEventListener('change', listener)
			} else {
				media.removeListener(listener)
			}
		}
	}, [matches, query])

	return matches
}

export const useBreakpoints = () => {
	const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.TABLET}px)`)
	const isTablet = useMediaQuery(
		`(min-width: ${BREAKPOINTS.TABLET + 1}px) and (max-width: ${
			BREAKPOINTS.DESKTOP
		}px)`,
	)
	const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.DESKTOP + 1}px)`)
	const isLargeDesktop = useMediaQuery('(min-width: 1200px)')

	return {
		isMobile,
		isTablet,
		isDesktop,
		isLargeDesktop,
	}
}
