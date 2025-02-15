import React from "react";
import { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState([]);
  return (
    <div className="main-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Write your task"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <button
          className="btn-primary"
          onClick={() => {
            props.handleAdd(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
