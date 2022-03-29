import { useState } from "react";

export default function ChuckNorris() {
  const URL = "https://api.chucknorris.io/jokes/random";

  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    const response = await fetch(URL);
    const jokes = await response.json();
    setJoke(jokes.value);
  };

  return (
    <div>
      <p>{joke === "" ? "Click for a new Chuck Norris Joke" : joke}</p>
      <button onClick={getJoke}>Chuck Norris Joke</button>
    </div>
  );
}
