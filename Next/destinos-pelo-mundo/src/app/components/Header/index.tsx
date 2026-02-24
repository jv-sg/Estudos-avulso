import Link from "next/link"
import stilos from "./Header.module.css"

const Header = () => {
    return(
        <header className={stilos.header}>
            <div className={stilos.header_container}>
                <h1 className={stilos.header__logo}><Link href="/">Destinos pelo mundo</Link></h1>
                <nav className={stilos.header__nav}>
                    <Link href="/">Inicio</Link>
                    <Link href="/destinos/todos">Destinos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header