import styles from './Main.module.css'
import Card from '../Card/Card'

function Main({ titulo, descripcion, productos}) {
    return (
        <main className={styles.main}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>

            <div className={styles.contenedorCards}>
                {productos.map((producto, index) => (
                    <Card
                     key={index}
                     nombre={producto.nombre}
                     precio={producto.precio}
                     />
                ))}
            </div>
        </main>
    )
}

export default Main
