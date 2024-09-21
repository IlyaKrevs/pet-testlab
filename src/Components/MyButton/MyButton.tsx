import React from 'react'
import classes from './MyButton.module.scss'

interface IButton {
    type: 'primary' | 'default',
    currentText: string,
}

export const MyButton: React.FC<IButton> = ({ type, currentText }) => {

    let styleArr = [classes.buttonContainer]

    if (type === 'primary') {
        styleArr.push(classes.primaryColour)
    } else {
        styleArr.push(classes.defaultColour)
    }


    return (
        <button className={styleArr.join(' ')}>
            {currentText}
        </button>
    )
}

