import React from 'react';
import { useCalculator } from '../context/CalculatorContext';
import { Link } from 'react-router-dom';

const Result = () => {
  const { selectedNumbers, getTotalSum, resetCalculator } = useCalculator();

  return (
    <div>
      <h1>Resultado</h1>
      <h2>Suma total: {getTotalSum()}</h2>
      <div>
        <h3>Números seleccionados:</h3>
        <p>{selectedNumbers.join(', ')}</p>
      </div>
      <button onClick={resetCalculator}>Reiniciar</button>
      <Link to="/">Volver a la Calculadora</Link>
    </div>
  );
};

export default Result;