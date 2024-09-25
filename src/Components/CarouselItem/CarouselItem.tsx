import React from 'react'
import classes from './CarouselItem.module.scss';

import defaultPersonPic from './defaultPerson.png';


interface ICarouselItem {
    name: string,
    city: string,
    desc: string,
    pic?: string | null
}



export const CarouselItem: React.FC<ICarouselItem> = ({ name, city, desc, pic }) => {


    let showPic = pic

    if (!showPic) {
        showPic = defaultPersonPic
    }

    return (
        <div className={classes.shadowWrapper}>

            <div className={classes.carouselItem}>

                <div className={classes.personContainer}>

                    <img src={showPic}
                        className={classes.picContainer}
                    />


                    <div className={classes.infoContainer}>

                        <div className={classes.nameContainer}>
                            {name}
                        </div>

                        <div className={classes.cityContainer}>
                            {city}
                        </div>

                    </div>
                </div>


                <div className={classes.carouselItem__text}>
                    {desc}
                </div>

            </div>

        </div>
    )
}

