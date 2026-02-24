import styles from "./Footer.module.css"

export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <p className={styles.footer__text}>Cinelista todos os direitos reservados</p>
        </footer>
    );
}