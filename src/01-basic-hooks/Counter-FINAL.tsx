import React, { useEffect, useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [buttonLabel, setButtonLabel] = useState('START COUNTING!');
  useEffect(() => {
    console.log(`Counter has been updated to ${count}`);
  }, [count]);

  return (
    <div className="Container" data-testid="counter-container">
      <section className="Content">
        <div className="Content__title">{count}</div>
        <div className="Content__button" onClick={() => setCount(count + 1)} >
          {buttonLabel}
        </div>
      </section>
    </div>
  );
};

export default Counter;
