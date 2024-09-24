import React from 'react'
import classes from './CardSVG.module.scss'

interface ICardSVG {
    icon: React.ReactNode,
    title: string,
    desc: string,
}

export const CardSVG: React.FC<ICardSVG> = ({ icon, title, desc }) => {
    return (
        <div className={classes.main__about_item}>

            <div className={classes.main__about_item_pic}>
                {icon}
            </div>

            <div className={classes.main__about_item_wrapper}>

                <div className={classes.main__about_item_title}>
                    {title}
                </div>
                <div className={classes.main__about_item_text}>
                    {desc}
                </div>

            </div>
        </div>
    )
}
