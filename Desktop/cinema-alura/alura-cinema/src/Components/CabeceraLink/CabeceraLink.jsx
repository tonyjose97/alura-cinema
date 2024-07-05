import { Link } from "react-router-dom";
import styles from "../CabeceraLink/Cabecera.module.css"

const CabeceraLink =({url,children})=>{
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabeceraLink;