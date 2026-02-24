import { Filme } from "@/types/types";
import styles from "./Card.module.css"

type Props = {
    filme: Filme
}

export const Card = ({filme} : Props) =>{
    const {id, title, imagem, description} = filme;
    return(
        <div key={id} className={styles.card}>
            <img className={styles.card__poster} src={ imagem } alt={`Poster do filme ${title}`} width={300} height={200} />
            <div className={styles.card__info}>
                <h3 className={styles.card__tile}>{ title }</h3>
                <p className={styles.card__description}> {description} </p>
            </div>
        </div>
    );
}