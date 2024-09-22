import React from 'react'
import classes from './Block3.module.scss'
import { BlockBlank } from '../../Components/BlockBlank/BlockBlank'

import defaultPersonPic from './defaultPerson.png'

interface IBlock3 {

}

export const Block3: React.FC<IBlock3> = () => {
    return (
        <BlockBlank titleText='Отзывы'>
            <div className={classes.carouselContainer}>



                <div className={classes.carouselItem}>

                    <div className={classes.personContainer}>

                        <img src={defaultPersonPic}
                            className={classes.picContainer}
                        />


                        <div className={classes.infoContainer}>

                            <div className={classes.nameContainer}>Константинов Михаил Павлович</div>

                            <div className={classes.cityContainer}>Санкт-Петербург</div>

                        </div>
                    </div>


                    <div className={classes.carouselItem__text}>
                        Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы
                    </div>

                </div>



                <div className={classes.carouselItem}>

                    <div className={classes.personContainer}>

                        <img src={defaultPersonPic}
                            className={classes.picContainer}
                        />


                        <div className={classes.infoContainer}>

                            <div className={classes.nameContainer}>Константинов Михаил Павлович</div>

                            <div className={classes.cityContainer}>Санкт-Петербург</div>

                        </div>
                    </div>


                    <div className={classes.carouselItem__text}>
                        Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы
                    </div>

                </div>
                <div className={classes.carouselItem}>

                    <div className={classes.personContainer}>

                        <img src={defaultPersonPic}
                            className={classes.picContainer}
                        />


                        <div className={classes.infoContainer}>

                            <div className={classes.nameContainer}>Константинов Михаил Павлович</div>

                            <div className={classes.cityContainer}>Санкт-Петербург</div>

                        </div>
                    </div>


                    <div className={classes.carouselItem__text}>
                        Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы
                    </div>

                </div>



            </div>
        </BlockBlank >
    )
}



