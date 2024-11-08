import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Result from '../components/Result';

const RoutesApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);

export default RoutesApp;