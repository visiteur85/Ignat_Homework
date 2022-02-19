import React from 'react'
import style from'./Message.module.css'

type AlternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div className={style.message}>
            <img className={style.avatar} src={props.avatar}/>
            <div className={style.angle}/>

            <div className={style.content}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
