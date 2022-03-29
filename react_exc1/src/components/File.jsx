import React from "react";
import PropTypes from "prop-types";
import obj, { persons } from "../modules/file2.mjs";

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

// function WelcomePerson({ person }) {
//   return <p>{`${person.firstName}, ${person.lastName}`}</p>;
// }

function WelcomePersonDestructuring({ person: { firstName, lastName } }) {
  return <p>{`${firstName}, ${lastName}`}</p>;
}

function WelcomePerson({ persons }) {
  return persons.map((p) => (
    <p key={p.email}>{`${p.firstName}, ${p.lastName}`}</p>
  ));
}

function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Michelle" />
      <Welcome name="Edith" />
      {/* <WelcomePerson person={persons[0]} /> */}
      <WelcomePerson persons={persons} />
      <WelcomePersonDestructuring person={persons[0]} />
    </div>
  );
}

WelcomePerson.propTypes = {
  persons: PropTypes.array.isRequired,
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

WelcomePersonDestructuring.propTypes = {
  // object
  //person: PropTypes.object.isRequired,
  // exact
  person: PropTypes.exact({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default MultiWelcome;
