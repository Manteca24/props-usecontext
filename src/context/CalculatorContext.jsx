import React, { createContext, useState, useContext } from 'react';

const CalculatorContext = createContext();



export const CalculatorProvider = ({ children }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);
  const addNumber = (num) => {
    setCurrentNumber(num);
    setSelectedNumbers([...selectedNumbers, num]);
  };
  const getTotalSum = () => selectedNumbers.reduce((acc, num) => acc + num, 0);
  const resetCalculator = () => {
    setSelectedNumbers([]);
    setCurrentNumber(0);
  };
  return (
    <CalculatorContext.Provider value={{ selectedNumbers, currentNumber, addNumber, getTotalSum, resetCalculator }}>
      {children}
    </CalculatorContext.Provider>
  );
};




export const useCalculator = () => useContext(CalculatorContext);