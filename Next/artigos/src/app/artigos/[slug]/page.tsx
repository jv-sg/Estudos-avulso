import { materias } from "@/lib/artigos"
import styles from "./Artigos.module.css"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{
        slug: string
    }>
}

export const generateMetadata = async({ params } : Props) =>{
    const { slug } = await params;
    const detalhes = materias.find(materias => materias.slug == slug)

    if(!detalhes) return;

    return{
        title : `${detalhes.titulo} | Blog News`,
        description: `${detalhes.subtitulo} | Noticias`,
        openGraph:{
            title : `${detalhes.titulo} | Blog News`,
            description: `${detalhes.materia}`,
            images:[`${detalhes.imagem}`]
        }
    }
}

export const dynamic = 'force-static'
export async function generateStaticParams() {
    return materias.map((materia) => ({
        slug: materia.slug,
    }))
}

const LerNoticia = async ({params} : Props) =>{
    const { slug } = await params;
    const detalhes = materias.find(materias => materias.slug == slug)

    if(!detalhes) return notFound()

    const {titulo, subtitulo, autor, data, imagem, materia} = detalhes
    return(
        <>
        <main className={styles.main}>
            <div className={styles.div__content}>
                <h1 className={styles.div__h1}>{titulo}</h1>
                <h2 className={styles.div__h2}>{subtitulo}</h2>
                <p className={styles.div__autor}>Escrito por: {autor}</p>
                <span className={styles.div__data}>Publicada em {data}</span>
                <img className={styles.div__img} src={imagem} alt={`Imagem da matéria de ${titulo}`} />
                <article className={styles.article}>
                    <p className={styles.article__p}>{materia}</p>
                </article>
            </div>
        </main>
        </>
    )
}

export default LerNoticia