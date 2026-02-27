import style from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={style.footer}>
            <p className={style.footer__text}>Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer