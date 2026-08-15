import styles from './Card.module.css'

function Card({ nombre, precio}) {
    return (
        <div className={styles.card}>
            <div className={styles.textos}>
            <h3>{nombre}</h3>
            <p>{precio}</p>
            </div>

            <button>Comprar</button>
        </div>
    )
}

export default Card
