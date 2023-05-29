import { useState }  from "react"
import styles from '../button.module.css'

export default function Contador () {
    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if (contador > 5) {
        return (
            <div className="container">
                <h1>Valor muito alto</h1>
                <button className={styles.myButton} onClick={diminuir}>diminuir</button>
            </div>
        )
    } else if (contador < -3) {
        return (
            <div className="container">
                <h1>Valor muito baixo</h1>
                <button className={styles.myButton} onClick={aumentar}>aumentar</button>
            </div>
        )
    } else {
        return (
            <div className="container">
                <h1>Meu Contador: {contador}</h1>
                {/*{contador > 9 ? <h1>Valor muito grande</h1> : null}*/}
                <button className={styles.myButton} onClick={aumentar}>aumentar</button>
                <button className={styles.myButton} onClick={diminuir}>diminuir</button>
            </div>
        )
    }
}