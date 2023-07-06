import React from "react";

const NewComp = (props) => {
  console.log("Hello buddy");

  return (
    <div>
      <h1>NewComp:{props.newCount}</h1>
    </div>
  );
};

export default NewComp;
