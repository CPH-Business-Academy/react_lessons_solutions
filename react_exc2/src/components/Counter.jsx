import React from "react";
import PropTypes from "prop-types";

export default function Counter({ num, func, name }) {
  return (
    <div style={container}>
      <button
        style={name === "ADD" ? add : name === "SUB" ? subtract : reset}
        onClick={() => func(num)}
      >
        {name}
      </button>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "row",
};

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

Counter.propTypes = {
  num: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
