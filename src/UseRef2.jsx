import React, { useState, useEffect, useRef } from "react";

const UseRef2 = () => {
  const count = useRef(0);

  useEffect(() => {
    console.log("The Component have been render");
  });

  const handle = () => {
    count.current = count.current + 1;
    console.log(`Clicked ${count.current} times`);
  };
  return (
    <div>
      <button onClick={handle}>Click Me</button>
    </div>
  );
};

export default UseRef2;
