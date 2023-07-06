import React, { useContext } from "react";
import { GreetContext, Greet2Context } from "./A";

const D = () => {
  const useCon = useContext(GreetContext);

  return (
    <h1>
      Greet: {useCon.greet} {useCon.greet2}
    </h1>
  );
};

export default D;
