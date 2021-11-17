import React from 'react';
import './Counter.css';

const Counter = () => {
  return (
    <div className="Container" data-testid="counter-container">
      <section className="Content">
        <div className="Content__title">1</div>
        <div className="Content__button">START COUNTING!</div>
      </section>
    </div>
  );
};

export default Counter;