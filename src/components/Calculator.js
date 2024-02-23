import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState(0);

  const handleClick = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <article>
      <Input value={input} />
      <Button onClick={handleClick}>AC</Button>
      <Button onClick={handleClick}>+/-</Button>
      <Button onClick={handleClick}>%</Button>
      <Button onClick={handleClick} className="basic-operator">
        &#247;
      </Button>
      <Button onClick={handleClick}>7</Button>
      <Button onClick={handleClick}>8</Button>
      <Button onClick={handleClick}>9</Button>
      <Button onClick={handleClick} className="basic-operator">
        x
      </Button>
      <Button onClick={handleClick}>4</Button>
      <Button onClick={handleClick}>5</Button>
      <Button onClick={handleClick}>6</Button>
      <Button onClick={handleClick} className="basic-operator">
        -
      </Button>
      <Button onClick={handleClick}>1</Button>
      <Button onClick={handleClick}>2</Button>
      <Button onClick={handleClick}>3</Button>
      <Button onClick={handleClick} className="basic-operator">
        +
      </Button>
      <Button onClick={handleClick} id="zero">
        0
      </Button>
      <Button onClick={handleClick}>.</Button>
      <Button>=</Button>
    </article>
  );
};

export default Calculator;
