import React from "react";
import C from "./C";

const B = (props) => {
  return (
    <div>
      <C greet={props.greet} />
    </div>
  );
};

export default B;
