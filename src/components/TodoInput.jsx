import React from "react";

export default function TodoInput({ handleAddTodo, inputValue, setInputValue }) {
  
  return (
    <header>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        Save
      </button>
    </header>
  );
}
