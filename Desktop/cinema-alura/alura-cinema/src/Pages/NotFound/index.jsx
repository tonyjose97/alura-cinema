import styles from "./notFound.module.css"

function NotFound() {
    return(<>
        <section>
            <h2 className={styles.error}>404</h2>
            <p className={styles.parrafo}>Pagina no encontrada</p>
        </section>
    </>
    )    
}

export default NotFound