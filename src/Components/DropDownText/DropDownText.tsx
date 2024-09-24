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
        <div className={classes.expandItem}
            onClick={onClickHandler}
        >

            <div className={classes.expandTitle}>
                <span>
                    {title}
                </span>

                <div className={btnStyles.join(' ')}>
                    <div className={classes.verticalLine}></div>
                    <div className={classes.horizontalLine}></div>
                </div>
            </div>
            {isOpen && (
                <div className={classes.expandDescription}>
                    {desc}
                </div>
            )}
        </div>
    )
}

