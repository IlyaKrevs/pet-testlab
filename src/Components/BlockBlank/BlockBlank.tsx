import React from 'react'
import classes from './BlockBlank.module.scss'

interface IBlockBlank {
    children?: React.ReactNode,
    titleText?: string,

}

export const BlockBlank: React.FC<IBlockBlank> = ({ titleText, children }) => {
    return (
        <section className={classes.container}>
            {!(titleText?.length && (titleText.length > 0)) ? null
                :
                (
                    <h2 className={classes.title}>
                        {titleText}
                    </h2>
                )
            }
            {children}
        </section>
    )
}

