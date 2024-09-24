import React from 'react'
import classes from './InputCheckBox.module.scss'

interface IInputCheckBox {
    labelText: string,
    isChecked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputCheckBox: React.FC<IInputCheckBox> = ({ labelText, isChecked, onChange }) => {

    return (
        <label className={classes.labelText}>
            <input type="checkbox"
                className={classes.inputBox}
                checked={isChecked}
                onChange={onChange}
            />
            {labelText}
        </label>
    )
}

