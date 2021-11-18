import React from 'react';
import './Home.css';

const NotFound = () => {
  return (
    <div className="Container">
      <section className="Content">
      <div className="Content__title">Welcome Home!</div>
        <div className="Content__button">Go to Counter 👉</div>
        <div className="Content__button">👈 Go to Modal</div>
      </section>
    </div>
  );
};

export default NotFound;