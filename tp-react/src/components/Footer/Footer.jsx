import styles from './Footer.module.css'

function Footer({ nombreSitio, texto, anio}) {
    return (
        <footer className={styles.footer}>
            <p>{nombreSitio}</p>
            <p>{texto}</p>
            <p>{anio}</p>
        </footer>
    )
}

export default Footer
