import { useState } from "react";
import upper, { text1, text2, text3 } from "./modules/file1.mjs";
import person, { males, females } from "./modules/file2.mjs";
import MultiWelcome from "./components/File";
import "./styles/App.css";
import Button from "react-bootstrap/Button";

function App() {
  const { firstName, lastName, gender, email } = person;
  const steve = {
    ...person,
    friends: [...males, ...females],
    phone: "256897415",
  };

  return (
    <div className="App">
      <h2>Exercise 1</h2>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <br />
      <h2>Exercise 2</h2>
      <p>{`${firstName}, ${lastName}, ${gender}, ${email}`}</p>
      <p>{females.join(" ")}</p>
      <p>{males.join(" ")}</p>
      <p>
        {`Phone Number: ${steve.phone}, 
           Friends: ${steve.friends.join(" ")}`}
      </p>
      <br />
      <h2>Exercise 3</h2>
      <MultiWelcome />
      <div>
        <>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button variant="success">Success</Button>{" "}
          <Button variant="warning">Warning</Button>{" "}
          <Button variant="danger">Danger</Button>{" "}
          <Button variant="info">Info</Button>{" "}
          <Button variant="light">Light</Button>{" "}
          <Button variant="dark">Dark</Button>{" "}
          <Button variant="link">Link</Button>
        </>
      </div>
    </div>
  );
}

export default App;
