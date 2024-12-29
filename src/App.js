import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const MAX_COUNT = 10;

  const increment = () => {
    if (count < MAX_COUNT) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Contador</h1>
      <div className="counter-display">{count}</div>
      <div className="button-container">
        <button onClick={increment} className="button">Incrementar</button>
        <button onClick={decrement} className="button">Decrementar</button>
        <button onClick={reset} className="button">Reiniciar</button>
      </div>
      <p className={`limit-message ${count === MAX_COUNT ? '' : 'hidden'}`}>
        Has alcanzado el número máximo
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;