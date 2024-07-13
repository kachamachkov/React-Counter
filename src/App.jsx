import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="wrapper">
        <h2>React Counter</h2>
        <div className="display">{counter}</div>
        <button onClick={() => setCounter((c) => (c += 1))}>Increment</button>
        <button onClick={() => setCounter((c) => (c -= 1))}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
