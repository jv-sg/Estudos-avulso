import Link from "next/link"
import styles from "./Header.module.css"
 
 
 const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
                <h1 className={styles.header__logo}><Link href="/">Blog News</Link></h1>
                <nav className={styles.header__nav}>
                    <Link href="/">Página Inicial</Link>
                    <Link href="/artigos/ultimas-noticias">Ultimas noticias</Link>
                    <Link href="/artigos/Dicas">Dicas</Link>
                </nav>
            </div>
        </header>
    )
 }

 export default Header