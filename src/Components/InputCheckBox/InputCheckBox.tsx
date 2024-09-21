import React from 'react'
import classes from './InputCheckBox.module.scss'

interface IInputCheckBox {
    labelText: string,
    isChecked: boolean,
}

export const InputCheckBox: React.FC<IInputCheckBox> = ({ labelText, isChecked }) => {



    return (
        <label className={classes.labelText}>
            <input type="checkbox"
                className={classes.inputBox}
                checked={isChecked}
            />
            <span></span>
            {labelText}
        </label>
    )
}

