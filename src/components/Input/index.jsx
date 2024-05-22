import styles from './Input.module.css'

const Input = ({setNomeUsuario}) => {

    return(
        <div className="container">
            <input className={styles.input} type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite o nome de usuário" />
        </div>
    )

}

export default Input;

