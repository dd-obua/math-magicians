import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState(0);

  const handleClick = (e) => {};

  // prettier-ignore
  const btnText = ['AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','.','=']

  return (
    <article>
      <Input value={input} />

      {btnText.map((btn) => (
        <Button onClick={handleClick}>{btn}</Button>
      ))}
    </article>
  );
};

export default Calculator;
