import React from 'react'
import classes from './MyButton.module.scss'

interface IButton {
    color: 'primary' | 'default',
    currentText: string,
    handlerOnClick: () => void,
}

export const MyButton: React.FC<IButton> = ({ color, currentText, handlerOnClick }) => {

    let styleArr = [classes.buttonContainer]

    if (color === 'primary') {
        styleArr.push(classes.primaryColour)
    } else {
        styleArr.push(classes.defaultColour)
    }



    return (
        <button
            className={styleArr.join(' ')}
            onClick={handlerOnClick}
        >
            {currentText}
        </button>
    )
}

