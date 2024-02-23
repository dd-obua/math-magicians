import { useState } from 'react';

const Input = () => {
  const [input, setInput] = useState(0);

  return <input type="text" value={input} />;
};

export default Input;
