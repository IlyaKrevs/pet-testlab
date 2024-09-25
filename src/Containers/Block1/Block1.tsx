import React, { useEffect, useState } from 'react'
import { MyButton } from '../../Components/MyButton/MyButton'

import mainBGimage from './mainBGimage.png'

import classes from './Block1.module.scss'



interface IBlock1 {

}

export const Block1: React.FC<IBlock1> = ({ }) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    function handlerOpenMenu() {
        setMenuOpen(prev => !prev)
    }


    let menuStyle = [classes.menuContainer]
    let topLineStyle = classes.btnLine_top
    let botLineStyle = classes.btnLine_bot
    let logoTextStyle = [classes.logo__text]


    if (menuOpen) {
        menuStyle.push(classes.menuContainer__OPEN)

        topLineStyle = classes.btnLine_top__OPEN
        botLineStyle = classes.btnLine_bot__OPEN
        logoTextStyle.push(classes.logo__text__OPEN)
    }

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])


    return (
        <div className={classes.blockWrapper}>


            <div className={menuStyle.join(' ')}>

                <div className={classes.openMenuItem}>
                    <div className={classes.openMenuItem__text}>Как это работает</div>
                    <div className={classes.openMenuItem__arrow}></div>
                </div>

                <div className={classes.openMenuItem}>
                    <div className={classes.openMenuItem__text}>3-й блок</div>
                    <div className={classes.openMenuItem__arrow}></div>
                </div>

                <div className={classes.openMenuItem}>
                    <div className={classes.openMenuItem__text}>Вопросы и ответы</div>
                    <div className={classes.openMenuItem__arrow}></div>
                </div>

                <div className={classes.openMenuItem}>
                    <div className={classes.openMenuItem__text}>Форма</div>
                    <div className={classes.openMenuItem__arrow}></div>
                </div>

            </div>

            <div className={classes.mainHeader}>
                <div className={classes.mainHeader__wrapper}>

                    <div className={classes.mainHeader__left}>
                        <div className={classes.logo__container}>

                            <span className={[classes.logo__circle, classes.circle_primaryColour].join(' ')}></span>
                            <span className={[classes.logo__circle, classes.circle_whiteColour].join(' ')}></span>
                        </div>
                        <h5 className={logoTextStyle.join(' ')}>
                            testLab
                        </h5>
                    </div>


                    <div className={classes.mainHeader__right}>

                        <span className={classes.mainHeader__navItem}>Как это работает</span>
                        <span className={classes.mainHeader__navItem}>3-й блок</span>
                        <span className={classes.mainHeader__navItem}>Вопросы и ответы</span>
                        <span className={classes.mainHeader__navItem}>Форма</span>


                        <div className={classes.openMenuBtn}
                            onClick={handlerOpenMenu}
                        >
                            <div className={[classes.btnLine, topLineStyle].join(' ')}></div>
                            <div className={[classes.btnLine, botLineStyle].join(' ')}></div>
                        </div>
                    </div>
                </div>
            </div>


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
