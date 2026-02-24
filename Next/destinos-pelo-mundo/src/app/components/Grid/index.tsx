import { destinos } from "@/types/types"
import Card from "../Card"
import stilos from "./Grid.module.css"

type Props = {
    destinos : destinos[]
}

const Grid = ({destinos} : Props) =>{
    return(
        <section className={stilos.grid}>
            {destinos.map(destino => <Card key={destino.id} destino={destino} />)}
        </section>
    )
}

export default Grid