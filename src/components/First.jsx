import style from './First.module.css'

export function First() {
    const openArasoiGithub = () => {
        window.open('https://github.com/EnzoBernardis2007/Arasoi-MINITCC', '_blank', 'noopener,noreferrer');
    }
    
    return (
        <main>
            <p className={style.intro}>Olá, eu me chamo</p>
            <div className={style.container}>
                <p className={style.title}>Enzo Bernardis.</p>
                <p className={style.subtitle}>Eu programo aplicações desktop.</p>
            </div>
            <p className={style.text}>Eu sou técnico em desenvolvimento de sistemas especializado em
                criar aplicações desktop robustos e leves. Atualmente estou focado no meu projeto de
                Mini-TCC chamado <b>Arasoi</b>.
            </p>
            <button
                className={style.button}
                onClick={openArasoiGithub}
            >Veja meu Mini-TCC!</button>
        </main>
    )
}