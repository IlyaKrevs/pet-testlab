import React, { useState } from 'react'
import classes from './DropDownText.module.scss'

interface IDropDownText {
    title: string,
    desc: string
}

export const DropDownText: React.FC<IDropDownText> = ({ title, desc }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    let btnStyles = [classes.customButton]


    function onClickHandler() {
        setIsOpen(prev => !prev)
    }

    if (isOpen) {
        btnStyles.push(classes.activeStyle)
    }
    return (
        <li className={classes.expandItem}
            onClick={onClickHandler}
        >

            <article className={classes.expandTitle}>
                <header>
                    {title}
                </header>

                <div className={btnStyles.join(' ')}>
                    <div className={classes.verticalLine}></div>
                    <div className={classes.horizontalLine}></div>
                </div>
            </article>
            {isOpen && (
                <p className={classes.expandDescription}>
                    {desc}
                </p>
            )}
        </li>
    )
}

