import React from 'react'
import classes from './Block2.module.scss'

import { firstSVG, secondSVG, thirdSVG, fourthSVG } from './mySvg'

import frontImg from './block2bg.png'
import backImg from './block2bg2.png'
import { BlockBlank } from '../../Components/BlockBlank/BlockBlank'


interface IBlock2 {

}

export const Block2: React.FC<IBlock2> = ({ }) => {


    return (
        <BlockBlank titleText='Как это работает'>

            <div className={classes.main__about}>

                <div className={classes.main__about_itemContainer}>

                    <div className={classes.main__about_item}>


                        {firstSVG}

                        <div className={classes.main__about_item_wrapper}>

                            <div className={classes.main__about_item_title}>
                                Прочитай задание внимательно
                            </div>
                            <div className={classes.main__about_item_text}>
                                Думаю у тебя не займет это больше двух-трех минут
                            </div>

                        </div>
                    </div>

                    <div className={classes.main__about_item}>


                        {secondSVG}

                        <div className={classes.main__about_item_wrapper}>

                            <div className={classes.main__about_item_title}>
                                Изучи весь макет заранее
                            </div>
                            <div className={classes.main__about_item_text}>
                                Подумай как это будет работать на разных разрешениях и при скролле
                            </div>

                        </div>
                    </div>
                    <div className={classes.main__about_item}>


                        {thirdSVG}

                        <div className={classes.main__about_item_wrapper}>

                            <div className={classes.main__about_item_title}>
                                Сделай хорошо
                            </div>
                            <div className={classes.main__about_item_text}>
                                Чтобы мы могли тебе доверить подобные задачи в будущем
                            </div>

                        </div>
                    </div>
                    <div className={classes.main__about_item}>


                        {fourthSVG}

                        <div className={classes.main__about_item_wrapper}>

                            <div className={classes.main__about_item_title}>
                                Получи предложение
                            </div>
                            <div className={classes.main__about_item_text}>
                                Ну тут все просто, не я придумал правила, но думаю так и будет)))
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div className={classes.secondContainer}>

                <div className={classes.secondContainer__item}>

                    <div className={classes.secondContainer__textContainer}>
                        <div className={classes.secondContainer__title}>
                            Круто, ты дошел до третьего блока
                        </div>


                        <div className={classes.secondContainer__descriptionContainer}>
                            <div className={classes.secondContainer__descriptionItem}>
                                63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                            </div>

                            <div className={classes.secondContainer__descriptionItem}>
                                Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                            </div>

                        </div>
                    </div>
                </div>


                <div className={classes.secondContainer__item}>
                    <img className={[classes.imageContainer, classes.frontImage].join(' ')} src={frontImg} />
                    <img className={[classes.imageContainer, classes.backImage].join(' ')} src={backImg} />
                </div>
            </div>
        </BlockBlank>
    )
}



