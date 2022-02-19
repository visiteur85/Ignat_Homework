import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorinput : s.input// need to fix with (?:)

    return (
        <div className={s.someClass}>

            <input value={name} onChange={setNameCallback} className={inputClass}/>

            <button onClick={addUser} disabled={name === ""}>add</button>
            <span className={s.count}>{totalUsers}</span>
            <span className={error ? s.error : ""}>{error}</span>
        </div>
    )
}

export default Greeting
