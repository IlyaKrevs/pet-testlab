import React from 'react'
import classes from './TitleAndDescription.module.scss';

interface ITitleAndDesc {
    title: string,
    desc: string,
}

export const TitleAndDescription: React.FC<ITitleAndDesc> = ({ title, desc }) => {
    return (
        <div className={classes.item}>

            <div className={classes.item__title}>
                {title}
            </div>
            <div className={classes.item__description}>
                {desc}
            </div>
        </div>

    )
}
