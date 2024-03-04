import React, { useState } from "react";
import styles from "./styles.module.css";

export const Imc = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateImc = () => {
    if (weight && height) {
      const imc = weight / (height * height);
      const formattedImc = imc.toFixed(2);
      setResult(+formattedImc);
    } else {

      console.error('Peso e altura são obrigatórios');
    }
  };

  return (
    <div>
        <h1>Calculadora I.M.C</h1>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(+e.target.value)}
        placeholder="Peso (kg)"
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(+e.target.value)}
        placeholder="Altura (m)"
      />
      <button className={styles.button1} onClick={calculateImc}>Calcular</button>

      <h3>Resultado IMC</h3>
      {result !== null ? <h4>{result}</h4> : <p>Preencha peso e altura para calcular o IMC.</p>}
    </div>
  );
};


