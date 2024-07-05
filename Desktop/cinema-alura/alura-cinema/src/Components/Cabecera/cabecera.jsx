import styles from "./cabecera.module.css"
import { Link } from "react-router-dom"
import logo from "./logo-alura.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"


const Cabecera = ()=>{
    return(
        <header className={styles.cabecera}>
        <Link to="/">
            <section className={styles.logoContainer}>
                <img src={logo} alt="alura latam" /><span>cinema</span>
            </section>
        </Link>
        <nav>
            <CabeceraLink url="/">
                Home
            </CabeceraLink>
            <CabeceraLink url="./favoritos">
                Favoritos
            </CabeceraLink>
        </nav>
        </header>
     )
    
}

export default Cabecera