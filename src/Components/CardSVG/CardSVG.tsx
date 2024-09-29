import React from 'react'
import classes from './CardSVG.module.scss'

interface ICardSVG {
    icon: React.ReactNode,
    title: string,
    desc: string,
}

export const CardSVG: React.FC<ICardSVG> = ({ icon, title, desc }) => {
    return (
        <li className={classes.main__about_item}>

            <div className={classes.main__about_item_pic}>
                {icon}
            </div>

            <div className={classes.main__about_item_wrapper}>

                <h6 className={classes.main__about_item_title}>
                    {title}
                </h6>
                <p className={classes.main__about_item_text}>
                    {desc}
                </p>

            </div>
        </li>
    )
}
