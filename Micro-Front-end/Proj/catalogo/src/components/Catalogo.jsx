export default function Catalogo(){
    const produtos = ["Notebook", "celular", "Fone de Ouvido"];
    return(
        <>
        <h2>Catálogo</h2>
        <ul>
            {
                produtos.map((p) => {
                    <li key={p}>{p}
                    <button onClick={() => {
                        window.dispatchEvent(new CustomEvent("adicionarCarrinho", {detail: p}))
                    }}>Adicionar</button></li>
                })
            }
        </ul>
        </>
    )
}