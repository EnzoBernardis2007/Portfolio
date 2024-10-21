import style from './Header.module.css'
import { SiCsharp } from "react-icons/si";

import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <div className={style.iconContainer}>
                <SiCsharp className={style.icon}/>
            </div>

            <div className={style.container}>
                <Link
                    className={style.button}
                    to={'/'}
                >Home</Link>
                <Link
                    className={style.button}
                    to={'/contact'}
                >Contato</Link>
            </div>
        </header>
    )
}