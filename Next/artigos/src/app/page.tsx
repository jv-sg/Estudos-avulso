import Grid from "./components/Grid";
import Title from "./components/Title";
import {materias} from "@/lib/artigos"

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <section>
      <div>
        <Title title="Blog News unimos as noticias e dicas" subtitulo="Leia nossas noticias ao mesmo tempo que confere dicas e truques do dia a dia"/>
      </div>
      <article>
        <Grid artigos={materias.filter((materias) => materias.categoria === "Noticias")}/>
      </article>
      <article>
        <Grid artigos={materias.filter((materias) => materias.categoria === "Blog de Dicas")}/>
      </article>
    </section>
  );
}