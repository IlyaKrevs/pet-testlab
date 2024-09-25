import React, { useState } from 'react'
import classes from './Block6.module.scss';
import { BlockBlank } from '../../Components/BlockBlank/BlockBlank';
import { InputCustom } from '../../Components/InputCustom/InputCustom';
import { InputCheckBox } from '../../Components/InputCheckBox/InputCheckBox';
import { MyButton } from '../../Components/MyButton/MyButton';

interface IBlock6 {

}



type isValid = {
    isOK: boolean | null
}
type IName = { name: string } & isValid
type IPhone = { phone: string } & isValid

export const Block6: React.FC<IBlock6> = () => {

    const [name, setName] = useState<IName>({
        name: '',
        isOK: null,
    })

    const [phone, setPhone] = useState<IPhone>({
        phone: '',
        isOK: null
    })

    const [isAccept, setIsAccept] = useState<boolean>(false)

    function handlerAccept(e: React.ChangeEvent<HTMLInputElement>) {
        setIsAccept(e.target.checked)
    }

    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {

        let isValid = null

        if (e.target.value.length > 0) {
            isValid = /^[A-Za-zА-Яа-яёЁ/s-]+$/.test(e.target.value)
        }

        setName({ name: e.target.value, isOK: isValid })
    }


    function handleChangePhone(e: React.ChangeEvent<HTMLInputElement>) {

        let isValid = null

        if (e.target.value.length > 0) {
            isValid = /^\d+$/.test(e.target.value)
        }

        setPhone({ phone: e.target.value, isOK: isValid })
    }


    function handleSubmitClick() {
        if (!name.isOK || !phone.isOK || !isAccept) {
            return
        }

        // fetch('123', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: name.name,
        //         phone: phone.phone
        //     })
        // })
        //     .then(res => res.json())
        // .then(data => console.log(data))

        setName({ name: '', isOK: null })
        setPhone({ phone: '', isOK: null })
        setIsAccept(false)
    }

    return (
        <>
            <BlockBlank titleText='Отправь форму'>
                <div className={classes.container}>

                    <div className={classes.formContainer}>
                        <InputCustom
                            labelText='Имя'
                            value={name.name}
                            handleChange={handleChangeName}
                            isValid={name.isOK}
                        />
                        <InputCustom
                            labelText='Телефон'
                            value={phone.phone}
                            handleChange={handleChangePhone}
                            isValid={phone.isOK}
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
                    </div>

                </div>

            </BlockBlank>
            <div className={classes.footer}>
                © 2021 Лаборатория интернет
            </div>
        </>
    )
}

