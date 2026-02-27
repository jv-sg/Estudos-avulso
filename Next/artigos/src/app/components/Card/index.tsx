import { Artigo } from "@/types/types"
import style from "./Card.module.css"
import Link from "next/link"

type Props ={
    artigo: Artigo
}

const Card = ({ artigo } : Props) => {
    const {id, slug, titulo, subtitulo, autor, imagem, data} = artigo
    return(
        <div key={id} className={style.card}>
            <Link href={`/artigos/${slug}`}>
                <img className={style.card__poster} src={imagem} alt={`artigo ${titulo}`} />
                <div className={style.card__content}>
                    <span className={style.card__data}>{ data }</span>
                    <h3 className={style.card__tile} >{ titulo }</h3>
                    <h4 className={style.card__description}>{ subtitulo }</h4>
                    <p className={style.card__info}>escrito por { autor }</p>
                </div>
            </Link>
        </div>
    )
}

export default Card