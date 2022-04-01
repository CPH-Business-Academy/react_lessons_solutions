import { useState, useEffect, useLayoutEffect } from "react";
import Counter from "./components/Counter";
import ChuckNorris from "./components/ChuckNorris";
import DadJokes from "./components/DadJokes";
import ListDemo from "./components/ListDemo";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")));

  const add = (num) => {
    setCount(count + num);
  };

  const sub = (num) => {
    setCount(count - num);
  };

  const reset = (num) => {
    setCount(num);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="App">
      <h2>Exercise 1</h2>
      <h1>{count}</h1>
      <Counter num={5} func={add} name="ADD" />
      <Counter num={1} func={sub} name="SUB" />
      <Counter num={0} func={reset} name="RESET" />
      <br />
      <h2>Exercise 2</h2>
      <ChuckNorris />
      <DadJokes />
      <br />
      <h2>Exercise 3</h2>
      <ListDemo />
    </div>
  );
}

export default App;
