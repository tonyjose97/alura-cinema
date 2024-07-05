import styles from "./contenedor.module.css"


const Contenedor =({children})=>{
    return(
        <section className={styles.contenedor}>
            {children}
        </section>
    )
}

export default Contenedor