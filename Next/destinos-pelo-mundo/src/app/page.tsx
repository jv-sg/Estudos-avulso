import Title from "./components/Title";
import stilos from "./page.module.css"

export default function Home() {
  return (
    <>
    <Title title="Somos a maior companhia de viagens"/>
    <div className={stilos.div}>
    <p className={stilos.paragafo}>A Destinos pelo Mundo é a agência de viagens que transforma sonhos em experiências inesquecíveis. Especializada em roteiros personalizados, oferecemos desde escapadas românticas até grandes aventuras internacionais, sempre com atendimento próximo, ágil e totalmente focado nas suas necessidades.</p>

    <p className={stilos.paragafo}>
    Com parcerias estratégicas, condições exclusivas e suporte completo antes, durante e depois da viagem, garantimos tranquilidade, segurança e as melhores oportunidades para você explorar o mundo.</p>
    <p className={stilos.paragafo}>
    Destinos pelo Mundo — porque sua próxima história começa com a escolha do destino certo. ✈️🌍</p>
    </div>
    </>
  );
}
