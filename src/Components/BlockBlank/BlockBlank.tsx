import React from 'react'
import classes from './BlockBlank.module.scss'

interface IBlockBlank {
    children?: React.ReactNode,
    titleText?: string,

}

export const BlockBlank: React.FC<IBlockBlank> = ({ titleText, children }) => {
    return (
        <div className={classes.container}>
            {!(titleText?.length && (titleText.length > 0)) ? null
                :
                (
                    <div className={classes.title}>
                        {titleText}
                    </div>
                )
            }
            {children}
        </div>
    )
}

