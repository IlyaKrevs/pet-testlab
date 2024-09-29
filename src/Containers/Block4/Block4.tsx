import React from 'react'
import classes from './Block4.module.scss'

import { BlockBlank } from '../../Components/BlockBlank/BlockBlank'
import { data4 } from './data4'
import { DropDownText } from '../../Components/DropDownText/DropDownText'


interface IBlock4 {

}

export const Block4: React.FC<IBlock4> = ({ }) => {

    let content = data4.map((item, i) => <DropDownText key={i} {...item} />)

    return (
        <BlockBlank titleText='Вопросы и ответы'>

            <ul>
                {content}
            </ul>

        </BlockBlank>
    )
}

