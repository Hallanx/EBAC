import React, { useState } from "react";
import styles from "./styles.module.css";

export const Imc = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateImc = () => {
    if (weight && height) {
      const imc = weight / (height * height);
      const formattedImc = imc.toFixed(2);
      setResult(+formattedImc);

      // Adicionando a classificação do IMC
      setClassification(getClassification(imc));
    } else {
      console.error('Peso e altura são obrigatórios');
    }
  };

  const getClassification = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade Grau 1';
    } else if (imc < 39.9) {
      return 'Obesidade Grau 2';
    } else {
      return 'Obesidade Grau 3';
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
      {result !== null ? (
        <>
          <h4>{result}</h4>
          <p>{classification}</p>
        </>
      ) : (
        <p>Preencha peso e altura para calcular o IMC.</p>
      )}
    </div>
  );
};
