import { Grid } from "@/app/components/Grid"
import { Title } from "@/app/components/Title"
import { getTopMovies } from "@/app/lib/api/tmdb"

export const dynamic = 'force-static'

const TopFilmes = async () =>{
    const filmes = await getTopMovies()
    return(
        <>
        <Title title="Filmes em Top-Filmes"/>
        <Grid filmes={filmes}/>
        </>
    )
}

export default TopFilmes