import React from 'react'
import { MyButton } from '../../Components/MyButton/MyButton'

import mainBGimage from './mainBGimage.png'

import classes from './Block1.module.scss'



interface IBlock1 {

}

export const Block1: React.FC<IBlock1> = ({ }) => {

    return (
        <div className={classes.blockWrapper}>

            <header className={classes.mainHeader}>
                <div className={classes.mainHeader__left__wrapper}>

                    <div className={classes.mainHeader__left}>
                        <div className={classes.logo__container}>

                            <span className={classes.logo__circle + ' ' + classes.circle_primaryColour}></span>
                            <span className={classes.logo__circle + ' ' + classes.circle_whiteColour}></span>
                        </div>
                        <h5 className={classes.logo__text}>
                            testLab
                        </h5>
                    </div>


                    <nav className={classes.mainHeader__right}>

                        <span className={classes.mainHeader__navItem}>Как это работает</span>
                        <span className={classes.mainHeader__navItem}>3-й блок</span>
                        <span className={classes.mainHeader__navItem}>Вопросы и ответы</span>
                        <span className={classes.mainHeader__navItem}>Форма</span>

                    </nav>
                </div>
            </header>


            <div
                style={{ backgroundImage: `url(${mainBGimage})` }}
                className={classes.firstBlock}

            >

                <div className={classes.firstBlock__underlay}></div>


                <div className={classes.firstBlock__content}>
                    <div className={classes.firstBlock__content_text}>
                        <h1 className={classes.firstBlock__content_title}>
                            Говорят, никогда не поздно сменить профессию
                        </h1>
                        <span className={classes.firstBlock__content_subtitle}>
                            Сделай круто тестовое задание и у тебя получится
                        </span>
                    </div>
                    <MyButton
                        color='default'
                        currentText='Проще простого!'
                        handlerOnClick={() => false}
                    />
                </div>
            </div>

        </div>
    )
}
