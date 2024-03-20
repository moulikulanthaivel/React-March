import React, { useState } from "react";

let Message = () => {
  let [state, setState] = useState("hello");
  return (
    <>
      <h1>value:{state}</h1>
      <button
        onClick={() => {
          setState("good morning");
        }}
      >
        good morning
      </button>
      <button
        onClick={() => {
          setState("good afternoon");
        }}
      >
        good afterNO0N
      </button>
    </>
  );
};
export default Message;
