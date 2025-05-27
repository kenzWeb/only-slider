import React, {useEffect, useRef, useState} from 'react'
import type {Swiper as SwiperType} from 'swiper'
import {Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {BREAKPOINTS, SLIDER_CONFIG} from '../../lib/constants'
import type {TimelineSliderProps} from '../../types/ui'
import {EventCard} from './EventCard'
import {SliderButton} from './SliderButton'
import {SliderCounter} from './SliderCounter'
import './TimelineSlider.scss'

import 'swiper/css'
import 'swiper/css/navigation'

export const TimelineSlider: React.FC<TimelineSliderProps> = ({events}) => {
	const swiperRef = useRef<SwiperType | null>(null)
	const prevRef = useRef<HTMLButtonElement>(null)
	const nextRef = useRef<HTMLButtonElement>(null)
	const [currentSlide, setCurrentSlide] = useState(1)
	const [totalSlides, setTotalSlides] = useState(events.length)
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(0, 0)
			setCurrentSlide(1)
			setTotalSlides(events.length)
			setIsBeginning(true)
			setIsEnd(events.length <= 1)
		}
	}, [events])

	const handleSlideChange = (swiper: SwiperType) => {
		setCurrentSlide(swiper.activeIndex + 1)
		setIsBeginning(swiper.isBeginning)
		setIsEnd(swiper.isEnd)
	}

	return (
		<div className='timeline-slider'>
			<div className='timeline-slider__info'>
				<SliderCounter
					current={currentSlide}
					total={totalSlides}
					className='timeline-slider__counter'
				/>
			</div>

			<div className='timeline-slider__navigation'>
				<SliderButton
					ref={prevRef}
					direction='prev'
					disabled={isBeginning}
					className='timeline-slider__button--prev'
				/>
				<SliderButton
					ref={nextRef}
					direction='next'
					disabled={isEnd}
					className='timeline-slider__button--next'
				/>
			</div>

			<Swiper
				onSwiper={(swiper) => {
					swiperRef.current = swiper
				}}
				modules={[Navigation]}
				spaceBetween={SLIDER_CONFIG.SPACE_BETWEEN}
				slidesPerView='auto'
				speed={SLIDER_CONFIG.SPEED}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onInit={(swiper) => {
					setTotalSlides(events.length)
					setIsBeginning(swiper.isBeginning)
					setIsEnd(swiper.isEnd)
				}}
				onSlideChange={handleSlideChange}
				className='timeline-slider__swiper'
				breakpoints={{
					[BREAKPOINTS.MOBILE]: {
						slidesPerView: 'auto',
						spaceBetween: SLIDER_CONFIG.SPACE_BETWEEN_SMALL,
					},
					[BREAKPOINTS.TABLET]: {
						slidesPerView: 'auto',
						spaceBetween: SLIDER_CONFIG.SPACE_BETWEEN_MOBILE,
					},
					[BREAKPOINTS.DESKTOP]: {
						slidesPerView: 'auto',
						spaceBetween: SLIDER_CONFIG.SPACE_BETWEEN,
					},
				}}
			>
				{events.map((event, index) => (
					<SwiperSlide key={index} className='timeline-slider__slide'>
						<EventCard event={event} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
