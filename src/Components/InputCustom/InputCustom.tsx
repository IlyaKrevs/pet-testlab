import React, { useEffect, useRef, useState } from 'react'
import classes from './InputCustom.module.scss'
import { goodIcon, badIcon } from './icons'

interface IInputCustom {
    labelText: string,
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isValid: boolean | null,
}


export const InputCustom: React.FC<IInputCustom> = ({ labelText, value, handleChange, isValid }) => {


    const [isFocused, setIsFocused] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    function handleFocus() {
        setIsFocused(true)

        setTimeout(() => {
            inputRef.current && inputRef.current.focus()
        }, 0);

    }

    useEffect(() => {
        const handleUnFocus = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setIsFocused(false)
            }
        }

        document.addEventListener('mousedown', handleUnFocus)

        let handleFocus = () => setIsFocused(true)

        inputRef.current?.addEventListener('focus', handleFocus)

        return () => {
            document.removeEventListener('mousedown', handleUnFocus)
            inputRef.current?.removeEventListener('focus', handleFocus)
        }
    }, [])


    let stylesMainContainer = [classes.mainContainer]


    if (!isFocused && value.length == 0) {
        stylesMainContainer.push(classes.noActiveColors)
    } else if (isFocused) {
        stylesMainContainer.push(classes.activeColors)
    }
    if (isValid) {
        stylesMainContainer.push(classes.goodColors)
    } else if (isValid !== null && !isValid) {
        stylesMainContainer.push(classes.badColors)
    }


    let inputStyles = [classes.inputText]

    if (!isFocused && value.length === 0) {
        inputStyles.push(classes.isHidden)
    }

    return (
        <div className={stylesMainContainer.join(' ')}
            onClick={handleFocus}
        >

            <label className={classes.labelContainer}>
                <span className={classes.labelText}>
                    {labelText}
                </span>

                <input
                    tabIndex={0}
                    ref={inputRef}
                    className={inputStyles.join(' ')}
                    type='text'
                    value={value}
                    onChange={handleChange}
                    placeholder={labelText}
                />

            </label>

            {(!isFocused && value.length > 0) && (isValid ? goodIcon : badIcon)}
        </div>
    )
}

