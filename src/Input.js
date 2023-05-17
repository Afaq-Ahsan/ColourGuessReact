import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColourValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Colour Name : </label>
      <input
        autoFocus
        type="text"
        placeholder="Add Colour Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColourValue(e.target.value);
          //npm i colorNames -S
        }}
      />

      <button type="button" onClick={() =>  setIsDarkText(!isDarkText)}>
        Toggle Text Colour{" "}
      </button>
    </form>
  );
};

export default Input;
