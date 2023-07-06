import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "incr") {
    return { count: state.count + 1 };
  } else if (action.type === "decr") {
    return { count: state.count - 1 };
  } else {
    throw new Error("unsuppoted action type");
  }
};

const UseReducerTutorial = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useState(reducer, { count: 0 });

  const handleClickInc = () => {
    dispatch({ type: "incr" });
  };
  const handleClickDec = () => {
    dispatch({ type: "decr" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
};

export default UseReducerTutorial;
