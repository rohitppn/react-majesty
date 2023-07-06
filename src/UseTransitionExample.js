import React, { useState } from "react";

function App() {
  const [name, setName] = useState(" ");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
    startTransition(() => {
      const dataList = [];

      for (let i = 0; i < LIST_SIZE; i++) {
        dataList.push(value);
      }
      setList(dataList);
    });
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} key="input" />
      {list.map((list, index) => {
        return <div key={index}>{list}</div>;
      })}
    </div>
  );
}

export default App;
