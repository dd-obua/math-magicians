import Input from './Input';
import Button from './Button';
import calculate from '../logic/calculate';
import { useState } from 'react';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  // prettier-ignore
  const btnText = [
    'AC','+/-','%','÷',
    '7','8','9','x',
    '4','5','6','-',
    '1','2','3','+',
    '0','.','='
  ]

  return (
    <article>
      <Input value={calculatorData.next || calculatorData.total || '0'} />

      {btnText.map((btn) => (
        <Button key={btn} onClick={handleClick}>
          {btn}
        </Button>
      ))}
    </article>
  );
};

export default Calculator;
