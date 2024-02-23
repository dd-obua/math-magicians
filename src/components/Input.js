import { useState } from 'react';

const Input = () => {
  const [entry, setEntry] = useState(0);

  return <input type="text" value={entry} />;
};

export default Input;
