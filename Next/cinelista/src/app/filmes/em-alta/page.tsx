import { Grid } from "@/app/components/Grid"
import { Title } from "@/app/components/Title"
import { getNowPlayng } from "@/app/lib/api/tmdb"

export const dynamic = 'force-static'

const FilmesEmAlta = async() =>{
    const filmes = await getNowPlayng()
    return(
        <>
        <Title title="Filmes em alta"/>
        <Grid filmes={filmes}/>
        </>
    )
}

export default FilmesEmAlta