import style from './About.module.css'
import { FaRegCircle } from "react-icons/fa6";

export function About() {
    return (
        <section>
            <div>
                <h1>1. Sobre mim</h1>
                <br />
                <p>Olá! Meu nome é Enzo, e eu gosto de criar aplicações desktop. 
                    Meu interesse por desenvolvimento de software começou lá em 2021, 
                    quando decidi explorar o mundo de criação de jogos com a Unity e C#, e acabei
                    me apaixonando por programação a cada novo script que eu desenvolvia.
                    <br /> <br />
                    Hoje em dia, tive o privilégio de estudar na Etec de Hortolândia,
                    uma escola tecnica que até hoje sou grato por estudar/ter estudado lá.
                    Atualmente, meu foco principal é desenvolver soluções desktop eficientes, 
                    utilizando tecnologias como WPF e C#, para oferecer experiências digitais de alta qualidade 
                    a uma variedade de usuários.
                    <br /> <br />
                    Recentemente, também terminei meu projeto de TCC, que é um software
                    que organiza campeonatos de karatê.
                    <br /> <br />
                    Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
                </p>
                <br /> 
                <ul>
                    <div>
                        <li><FaRegCircle className={style.circle}/> C#</li>
                        <li><FaRegCircle className={style.circle}/> WPF</li>
                    </div>
                    
                    <div>
                        <li><FaRegCircle className={style.circle}/> Java</li>
                        <li><FaRegCircle className={style.circle}/> React</li>
                    </div>
                </ul>
            </div>
            <img className={style.img} src="https://picsum.photos/1"/>
        </section>
    )
}