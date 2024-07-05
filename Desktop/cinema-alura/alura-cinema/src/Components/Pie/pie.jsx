import logo from "../Cabecera/logo-alura.png"
import styles from  "./pie.module.css"

const Pie = ()=>{
    return (
        <footer className={styles.pie}> 
            <p className={styles.texto}>Desarrollado por</p><img src={logo} alt="logo alura" />
        </footer>
    )
}

export default Pie