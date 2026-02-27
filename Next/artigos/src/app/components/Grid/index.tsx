import { Artigo } from "@/types/types"
import Card from "../Card"
import style from "./Grid.module.css"

type Props = {
    artigos: Artigo[]
}

const Grid = ({artigos} : Props) => {
    return(
        <section className={style.grid}>
            {artigos.map(artigo => <Card key={artigo.id} artigo={artigo} />)}
        </section>
    )
}

export default Grid