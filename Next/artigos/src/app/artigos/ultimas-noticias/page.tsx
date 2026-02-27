import Grid from "@/app/components/Grid"
import Title from "@/app/components/Title"
import { materias } from "@/lib/artigos"
import style from "./Ultimas-noticias.module.css"

export const revalidate = 60;

const UltimasNoticias = async () => {
    const artg = await materias
    return(
        <div className={style.div}>
            <div className={style.div__content}>
                <Title title="Ultimas noticias" subtitulo="Noticias em primeira mão, confira os últimos acontecimentos no Brasil e no mundo"/>
                <Grid artigos={artg.filter((artg) =>  artg.categoria === "Noticias")}/>
            </div>
        </div>
    )
}

export default UltimasNoticias