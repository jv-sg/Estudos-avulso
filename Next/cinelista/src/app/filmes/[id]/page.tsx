import Link from "next/link";
import { notFound } from "next/navigation";
import style from "./DetalhesFilme.module.css"
import { getMovieDetails } from "@/app/lib/api/tmdb";
import { title } from "process";

type Props = {
    params : Promise<{
        id : number
    }>
}

export const generateMetadata = async({params} : Props) =>{
    const { id } = await params;
    const details = await getMovieDetails(id)

    if(!details) return notFound()

        return{
        title: `${details?.title} | Cinelista`,
        description: details.overview,
        openGraph: {
            title: `${details?.title} | Cinelista`,
            description: details.overview,
            images:[`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`]
        }
    }
}

const DetalheFilme = async ({params} : Props) =>{
    const { id } = await params;
    const details = await getMovieDetails(id)

    if(!details) return notFound()

    const {title, poster_path, overview} = details;

    return(
        <>
        <div className={style.detalhe}>
            <h1>{details?.title}</h1>
            <div className={style.detalhe__container}>
                <section>
                    <figure>
                        <img className={style.card__poster}
                src={ `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}` }
                alt={`Poster do filme ${title}`}/>
                    </figure>
                    <article className={style.detalhe__info}>
                        <p>{overview}</p>
                    </article>
                </section>
            </div>
        </div>
        <Link href="/">Voltar</Link>
        </>
    )
}

export default DetalheFilme