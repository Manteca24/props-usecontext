import React from 'react';
import { useCalculator } from '../context/CalculatorContext';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const { addNumber, currentNumber } = useCalculator();
  
  const handleClick = (num) => {
    addNumber(num);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div>
        <h2>Número actual: {currentNumber}</h2>
      </div>
      <div>
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </div>
      <Link to="/result">Ver Resultado</Link>
    </div>
  );
};

export default Calculator;

/*[]...Array(10).keys()] forma rápida para crear un array con números del 0 al 9 */ 