import stilos from "./Footer.module.css"

const Footer = () =>{
    return(
        <footer className={stilos.footer}>
            <p className={stilos.footer__text}>Todos os direitos reservados da marca Destinos pelo mundo</p>
        </footer>
    )
}

export default Footer