import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function slowFunction() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {}
    console.log("Hellow I'm slow function");
    return sum;
  }
  const result = slowFunction();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <br />
      <hr />
      <input type="text" value={input} onChange={handleInput} />
      <h1>Input: {input}</h1>
      <hr />
      {result}
    </div>
  );
};

export default Memo;
