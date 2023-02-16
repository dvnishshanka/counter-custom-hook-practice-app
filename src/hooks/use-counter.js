import { useState, useEffect } from 'react';

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevState) => {
        return forward ? prevState + 1 : prevState - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return counter;
};

export default useCounter;
