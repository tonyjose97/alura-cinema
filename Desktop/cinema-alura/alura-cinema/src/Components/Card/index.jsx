import iconoFavorito from "./iconoFavorito.png"
import iconoNoFavorito from "./iconoNoFavorito.png"
import styles from "./card.module.css"
import { useFavoritosContext } from "../../Context/Favoritos"
import {Link} from "react-router-dom"

const Card = ({id,titulo,capa})=>{

    const {favorito,agregarFavorito}=useFavoritosContext()
    const isFavorito = favorito.some(fav=> fav.id === id)
    const icon = isFavorito ?  iconoNoFavorito :iconoFavorito
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`${id}`}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            </Link>
            <img src={icon} alt="icono favorito" onClick={()=>agregarFavorito({id,titulo,capa})}/>  
        </div>
    )
}

export default Card