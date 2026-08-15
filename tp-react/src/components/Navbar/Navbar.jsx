import styles from './Navbar.module.css'

function Navbar ({ titulo, links }) {
    return (
        <nav className={styles.navbar}>
            <h1>{titulo}</h1>
            <div>
                {links.map((link) => (
                    <a href="#" key= {link}>{link}</a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
