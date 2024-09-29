import React from 'react'
import classes from './TitleAndDescription.module.scss';

interface ITitleAndDesc {
    title: string,
    desc: string,
}

export const TitleAndDescription: React.FC<ITitleAndDesc> = ({ title, desc }) => {
    return (
        <li className={classes.item}>

            <header className={classes.item__title}>
                {title}
            </header>
            <p className={classes.item__description}>
                {desc}
            </p>
        </li>

    )
}
