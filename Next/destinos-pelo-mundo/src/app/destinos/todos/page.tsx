import Grid from "@/app/components/Grid"
import Title from "@/app/components/Title"
import { listaDestino } from "@/lib/listaDestino"

const Todos = () =>{
    return(
        <>
            <Title title="Todos os destinos"/>
            <Grid destinos={listaDestino}/>
        </>
    )
}

export default Todos