import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((prev) => prev - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((prev) => prev + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((prev) => prev - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>
      <p>{date.toDateString()}</p>
    </div>
  );
}
