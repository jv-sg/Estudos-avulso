import { destinos } from "@/types/types"
import stilos from "./Card.module.css"

type Props = {
    destino : destinos
}

const Card = ({ destino } : Props) =>{
    const {id, nome, imagem} = destino
    return(
        <div className={stilos.card} key={id}>
            <img className={stilos.card__poster} src={imagem} alt={`Imagem do destino ${nome}`} width={300} height={200} />
            <h3 className={stilos.card__tile}>{nome}</h3>
        </div>
    )
}

export default Card