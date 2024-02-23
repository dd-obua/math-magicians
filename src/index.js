import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from './components/Calculator';
import './css/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
