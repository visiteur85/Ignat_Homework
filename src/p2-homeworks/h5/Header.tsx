import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routess";
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => isActive ? style.active : style.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? style.active : style.link}>junior</NavLink>
            <NavLink to={PATH.JUNIORPlus}
                     className={({isActive}) => isActive ? style.active : style.link}>junior+</NavLink>
            <div className={style.div}>open me</div>
            {/*  <button className={style.div}>hello</button>*/}


        </div>
    )
}

export default Header
