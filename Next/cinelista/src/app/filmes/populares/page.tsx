import { Grid } from "@/app/components/Grid";
import { Title } from "@/app/components/Title"
import { getPopularMovie } from "@/app/lib/api/tmdb"

export const dynamic = 'force-static'

const Populares = async() =>{
    const filmes = await getPopularMovie();
    return(
        <>
        <Title title="Filmes em Populares"/>
        <Grid filmes={filmes}/>
        </>
    )
}

export default Populares