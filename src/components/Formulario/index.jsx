import { useState, useEffect } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState("");

    // const calcularIMC = () => {
    //     const imcCalculado = peso/(altura * altura);
    //     setImc(imcCalculado.toFixed(2))
    // }

    useEffect(() => {
        if (peso > 0 && altura > 0) {
            const imcCalculado = peso / (altura * altura);
            setImc(imcCalculado.toFixed(2))
            if (imcCalculado < 18.5) {
                setClassificacao("Baixo peso")
            }else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
                setClassificacao("Eutrofia (peso adequado)")
            } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
                setClassificacao("Sobrepeso")
            } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
                setClassificacao("Obesidade grau 1")
            } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
                setClassificacao("Obesidade grau 2")
            } else {
                setClassificacao("Obesidade extrema")
            }
        } else{
            setImc(null)
        }
    },[peso, altura])

    return (
        <div className="container">
            <h3 className={styles.subtitle}>Calcule aqui:</h3>
            <form className={styles.form}>
                <input className={styles.item}
                    type="number" 
                    placeholder="peso" 
                    onChange={evento => setPeso(parseFloat(evento.target.value))}
                />
                <input className={styles.item}
                    type="number" 
                    placeholder="altura" 
                    onChange={evento => setAltura(parseFloat(evento.target.value))}
                />
                {(peso !== 0 && altura !== 0) && (
                    <div>
                        <p className={styles.message}>Seu IMC é: {imc}</p>
                        <p className={styles.message}>Classificação: {classificacao}</p>
                    </div>
                )}
                {/* <button type="button" onClick={calcularIMC}>Calcular IMC</button> */}
            </form>
        </div>
    )
}

export default Formulario;