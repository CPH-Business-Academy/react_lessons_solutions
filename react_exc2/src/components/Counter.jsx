import React from "react";

export default function Counter({ num, func, name }) {
  return (
    <div>
      <button
        style={name === "ADD" ? add : name === "SUB" ? subtract : reset}
        onClick={() => func(num)}
      >
        {name}
      </button>
    </div>
  );
}

const add = {
  margin: "3px",
  padding: "5px",
  width: "120px",
  borderRadius: "15px",
  border: "3px dashed blue",
};

const subtract = {
  margin: "3px",
  padding: "5px",
  width: "120px",
  borderRadius: "15px",
  border: "3px dashed red",
};

const reset = {
  margin: "3px",
  padding: "5px",
  width: "120px",
  borderRadius: "15px",
  border: "3px dashed green",
};
