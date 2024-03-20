import { useState } from "react";

const Counter = () => {
  let [counter, SetCounter] = useState(1);

  return (
    <>
      <h1>value:{counter}</h1>
      <button
        onClick={() => {
          SetCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          SetCounter(counter - 1);
        }}
      >
        -
      </button>
    </>
  );
};
export default Counter;


