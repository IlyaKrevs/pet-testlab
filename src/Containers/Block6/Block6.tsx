import React, { useState } from 'react'
import classes from './Block6.module.scss';
import { BlockBlank } from '../../Components/BlockBlank/BlockBlank';
import { InputCustom } from '../../Components/InputCustom/InputCustom';
import { InputCheckBox } from '../../Components/InputCheckBox/InputCheckBox';
import { MyButton } from '../../Components/MyButton/MyButton';
import { useInputValidation } from '../../fn/Hooks/useInputValidation';

interface IBlock6 {

}
export const Block6: React.FC<IBlock6> = () => {

    const nameRegExp: RegExp = /^[A-Za-zА-Яа-яёЁ/s-]+$/;
    const [name, isValidName, handlerChangeName, resetName] = useInputValidation(nameRegExp)

    const phoneRegExp: RegExp = /^\d+$/;
    const [phone, isValidPhone, handlerChangePhone, resetPhone] = useInputValidation(phoneRegExp)

    const [isAccept, setIsAccept] = useState<boolean>(false)
    function handlerAccept(e: React.ChangeEvent<HTMLInputElement>) {
        setIsAccept(e.target.checked)
    }



    function handleSubmitClick() {
        if (!isValidName || !isValidPhone || !isAccept) {
            return
        }

        // fetch('123', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         phone: phone
        //     })
        // })
        //     .then(res => res.json())
        // .then(data => console.log(data))

        resetName()
        resetPhone()
        setIsAccept(false)
    }

    return (
        <>
            <BlockBlank titleText='Отправь форму'>
                <article className={classes.container}>

                    <form
                        onSubmit={e => e.preventDefault()}
                        className={classes.formContainer}>
                        <InputCustom
                            labelText='Имя'
                            value={name}
                            handleChange={handlerChangeName}
                            isValid={isValidName}
                        />
                        <InputCustom
                            labelText='Телефон'
                            value={phone}
                            handleChange={handlerChangePhone}
                            isValid={isValidPhone}
                        />
                        <InputCheckBox
                            isChecked={isAccept}
                            onChange={handlerAccept}
                            labelText='Согласен, отказываюсь' />
                        <MyButton
                            color='primary'
                            currentText='Отправить'
                            handlerOnClick={handleSubmitClick}
                        />
                    </form>

                </article>

            </BlockBlank>
            <footer className={classes.footer}>
                © 2021 Лаборатория интернет
            </footer>
        </>
    )
}

