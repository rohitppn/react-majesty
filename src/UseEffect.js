import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState();
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("We r in Use state");

    return () => {
      console.log("return of use state");
    };
  }, [clicked]);

  return (
    <div>
      <button onClick={() => setClicked("Subscribe")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("To")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("DropXoUt")}>DropXoUt</button>
      <h1>{clicked}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
