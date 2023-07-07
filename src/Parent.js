import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const childRef = useRef(null);

  function handleOpenModal(val) {
    childRef.current.openModal(val);
  }

  return (
    <div>
      <p>This is a parent</p>
      <Child ref={childRef} />
      <button onClick={() => handleOpenModal(true)}>Open modal</button>
    </div>
  );
};

export default Parent;
