import Input from './Input';
import Button from './Button';

const Calculator = () => {
  return (
    <article>
      <Input />
      <Button>AC</Button>
      <Button>+/-</Button>
      <Button>%</Button>
      <Button className="basic-operator">&#247;</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button className="basic-operator">x</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button className="basic-operator">-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button className="basic-operator">+</Button>
      <Button id="zero">0</Button>
      <Button>.</Button>
      <Button>=</Button>
    </article>
  );
};

export default Calculator;
