import React from 'react'
import classes from './Block5.module.scss'

import { BlockBlank } from '../../Components/BlockBlank/BlockBlank'

import { data5 } from './data5'
import { TitleAndDescription } from '../../Components/TitleAndDescription/TitleAndDescription'

interface IBlock5 {

}

export const Block5: React.FC<IBlock5> = () => {


    let content = data5.map((item, i) => <TitleAndDescription key={i} {...item} />)

    return (
        <BlockBlank >
            <ul className={classes.container}>

                {content}

            </ul>
        </BlockBlank>
    )
}


