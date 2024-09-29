import React from 'react'
import classes from './Block2.module.scss'

import { data2 } from './data2'

import frontImg from './block2bg.png'
import backImg from './block2bg2.png'
import { BlockBlank } from '../../Components/BlockBlank/BlockBlank'
import { CardSVG } from '../../Components/CardSVG/CardSVG'


interface IBlock2 {

}

export const Block2: React.FC<IBlock2> = ({ }) => {

    let content = data2.map((item, i) => <CardSVG key={i} {...item} />)

    return (
        <BlockBlank titleText='Как это работает'>

            <article className={classes.main__about}>
                <ul className={classes.main__about_itemContainer}>

                    {content}

                </ul>
            </article>



            <article className={classes.secondContainer}>

                {/* idk how to parse this ?????????????? */}

                <section className={classes.secondContainer__item}>
                    <article className={classes.secondContainer__textContainer}>
                        <header className={classes.secondContainer__title}>
                            Круто, ты дошел до третьего блока
                        </header>

                        <ul className={classes.secondContainer__descriptionContainer}>

                            <li className={classes.secondContainer__descriptionItem}>
                                63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                            </li>

                            <li className={classes.secondContainer__descriptionItem}>
                                Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                            </li>

                        </ul>
                    </article>
                </section>

                <section className={classes.secondContainer__item}>
                    <img className={[classes.imageContainer, classes.frontImage].join(' ')} src={frontImg} />
                    <img className={[classes.imageContainer, classes.backImage].join(' ')} src={backImg} />
                </section>
            </article>
        </BlockBlank>
    )
}
