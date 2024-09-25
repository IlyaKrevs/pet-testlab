import React from 'react'
import classes from './Block3.module.scss'
import { BlockBlank } from '../../Components/BlockBlank/BlockBlank'

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css';

import { data2 } from './data2'
import { CarouselItem } from '../../Components/CarouselItem/CarouselItem'



interface IBlock3 {

}

export const Block3: React.FC<IBlock3> = () => {

    let swiperConfig: SwiperProps = {
        modules: [Navigation, Pagination],
        spaceBetween: 0,
        navigation: {
            prevEl: '.' + classes.leftArrow,
            nextEl: '.' + classes.rightArrow,
        },
        pagination: {
            clickable: true,
            el: '.' + classes.paginationWrapper,
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            375: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },

        },
    }

    let content = data2.map(item => {
        return (
            <SwiperSlide>
                <CarouselItem {...item} />
            </SwiperSlide>
        )
    })

    return (
        <BlockBlank titleText='Отзывы'>

            <div className={classes.carouselContainer}>

                <div className={classes.leftArrow}>
                    <div className={classes.arrow}></div>
                </div>
                <div className={classes.rightArrow}>
                    <div className={classes.arrow}></div>
                </div>

                <div className={classes.paginationWrapper}>
                    <div className={classes.paginationContainer}></div>
                </div>

                <Swiper
                    {...swiperConfig}
                >

                    {content}

                </Swiper>

            </div>

        </BlockBlank >
    )
}
