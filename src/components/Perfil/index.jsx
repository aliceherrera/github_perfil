import styles from './Perfil.module.css';


// export default () => {
// export default function() {

const Perfil = ({ nomeUsuario }) => {
    return (
        <div className="container">    
            <header className={styles.header}>
                <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
                <h1 className={styles.name}>
                    {nomeUsuario}
                </h1>
            </header>
        </div>
    )
}

export default Perfil;