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
        <li className={classes.shadowWrapper}>

            <article className={classes.carouselItem}>

                <header className={classes.personContainer}>

                    <img src={showPic}
                        className={classes.picContainer}
                    />


                    <div className={classes.infoContainer}>

                        <h6 className={classes.nameContainer}>
                            {name}
                        </h6>

                        <div className={classes.cityContainer}>
                            {city}
                        </div>

                    </div>
                </header>


                <p className={classes.carouselItem__text}>
                    {desc}
                </p>

            </article>

        </li>
    )
}

