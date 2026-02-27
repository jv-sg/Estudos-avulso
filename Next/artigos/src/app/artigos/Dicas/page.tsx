import Grid from "@/app/components/Grid"
import Title from "@/app/components/Title"
import { materias } from "@/lib/artigos"
import style from "./Dicas.module.css"

export const dynamic = 'force-static'

const Dicas = async () => {
    const artgs = await materias

    return(
        <div className={style.div}>
            <div className={style.div__content}>
                <Title title="Confira dicas e nossos conteúdos exclusvios para membros do grupo vip"
                subtitulo="Dicas do dia a dia, sempre atualziados com os assuntos mais relevantes, venha e confira todoas as nossas dicas"/>
                <Grid artigos={artgs.filter((artgs) =>  artgs.categoria === "Blog de Dicas")}/>
            </div>
        </div>
    )
}

export default Dicas