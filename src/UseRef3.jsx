import React, { useEffect } from "react";

const UseRef3 = () => {
  const inputE1 = React.useRef(null);

  const handleFocus = () => {
    inputE1.current.style.backgroundColor = "black";
  };
  const handleBlur = () => {
    inputE1.current.style.backgroundColor = "";
  };

  useEffect(() => {
    inputE1.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputE1}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default UseRef3;
