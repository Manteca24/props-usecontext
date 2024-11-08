import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { CalculatorProvider } from './context/CalculatorContext';
import './App.css'

const App = () => (
  <CalculatorProvider>
    <RoutesApp />
  </CalculatorProvider>
);

export default App;