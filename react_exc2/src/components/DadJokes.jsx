import { useState, useEffect } from "react";

export default function DadJokes() {
  const [dadJoke, setDadJoke] = useState("");
  const URL = "https://icanhazdadjoke.com/";

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const getDadJoke = async () => {
    const response = await fetch(URL, options);
    const jokes = await response.json();
    setDadJoke(jokes.joke);
  };

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       getDadJoke();
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   });

  return (
    <div>
      <p>{dadJoke === "" ? "Click for a new Dad Joke" : dadJoke}</p>
      <button onClick={getDadJoke}>Dad Joke</button>
    </div>
  );
}
