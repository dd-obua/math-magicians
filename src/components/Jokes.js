import { useEffect, useState } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        setLoading(true);

        const res = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
        const data = await res.json();

        setLoading(false);
        setJoke(data.joke);
      } catch (error) {
        setError('Error fetching joke.');

        setLoading(false);
      }
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p className="joke">Loading ...</p>;
  if (error) return <p className="joke">{error}</p>;
  return <p className="joke">{joke}</p>;
};

export default Jokes;
