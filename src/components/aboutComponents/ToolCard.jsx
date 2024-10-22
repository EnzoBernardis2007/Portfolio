import style from './ToolCard.module.css'

export function ToolCard({ img, name }) {
    return (
        <div className={style.container}>
            <img className={style.img} src={img}/>
            <p className={style.p}>{name}</p>
        </div>
    )
}