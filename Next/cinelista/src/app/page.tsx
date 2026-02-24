import { Title } from "./components/Title";
import { Grid } from "./components/Grid";
import { filmes } from "@/app/lib/filmes"

export default function Home() {
  return (
    <>
    <Title title="Filmes em destaque"/>
    <Grid filmes={filmes}/>
    </>
  );
}
