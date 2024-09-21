import React from 'react'
import classes from './InputCustom.module.scss'


interface IInputCustom {
    labelText: string,
}

export const InputCustom: React.FC<IInputCustom> = ({ labelText }) => {
    return (
        <div className={classes.mainContainer}>

            <label>
                <input
                    type='text'

                />
                {labelText}
            </label>
        </div>
    )
}
