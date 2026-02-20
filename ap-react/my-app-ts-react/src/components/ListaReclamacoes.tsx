import type { Reclamacao } from "../tipos/Reclamacao"
import ItemReclamacao from "./ItemReclamacao";


type Props = {
    reclamacoes : Reclamacao[];
}

const ListaReclamacoes = ({reclamacoes}: Props) =>{
    if(reclamacoes.length === 0)
        return <p>Nenhuma reclamação foi registrada.</p>

    return(
        <div>
            {
                reclamacoes.map(item => (<ItemReclamacao key={item._id} reclamacao={item}/>))
            }
        </div>
    )
}

export default ListaReclamacoes;