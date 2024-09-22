import React from 'react'
import classes from './Block4.module.scss'

import { BlockBlank } from '../../Components/BlockBlank/BlockBlank'


interface IBlock4 {

}



export const Block4: React.FC<IBlock4> = () => {
    return (
        <BlockBlank titleText='Вопросы и ответы'>

            <div className={classes.expandItem}>

                <div className={classes.expandTitle}>
                    <span>
                        Частокол на границе продолжает удивлять?
                    </span>

                    <div className={classes.customButton}>
                        <div className={classes.verticalLine}></div>
                        <div className={classes.horizontalLine}></div>
                    </div>
                </div>
                <div className={classes.expandDescription}>
                    В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                </div>
            </div>


        </BlockBlank>
    )
}
