import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>

      <div className="calculator">
        <input type="text" value={input} readOnly />

        <div className="buttons">
          {['7', '8', '9', '/', '4', '5', '6', '*',
            '1', '2', '3', '-', '.', '0', '=', '+'
          ].map((btn) =>
            btn === '=' ? (
              <button key={btn} onClick={handleEqual}>
                {btn}
              </button>
            ) : (
              <button key={btn} onClick={() => handleClick(btn)}>
                {btn}
              </button>
            )
          )}
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;