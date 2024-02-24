import { useEffect, useState } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const res = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
        const data = await res.json();
        setJoke(data.joke);
      } catch (error) {
        console.log(error.message);
        setJoke('Error fetching joke.');
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return <p>{joke}</p>;
};

export default Jokes;
