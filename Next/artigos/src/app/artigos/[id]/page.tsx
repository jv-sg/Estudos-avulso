import { materias } from "@/lib/artigos"
import styles from "./Artigos.module.css"
import { notFound } from "next/navigation"
import { title } from "process"

type Props = {
    params : Promise<{
        id : number
    }>
}

export const generateMetadata = async({ params } : Props) =>{
    const { id } = await params;
    const detalhes = materias.find(materias => materias.id == id)

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

const LerNoticia = async ({params} : Props) =>{
    const { id } = await params;
    const detalhes = materias.find(materias => materias.id == id)

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