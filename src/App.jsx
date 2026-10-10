
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: "Oviya", role: "React Learner" },
    { id: 2, name: "Rahul", role: "Frontend Developer" }
  ]);

  function addPerson(name) {
    const newPerson = {
      id: Date.now(),
      name: name,
      role: "New Member"
    };

    setPeople([...people, newPerson]);
  }

  function removePeople() {
    setPeople([]);
  }

  function showMessage() {
    alert("Button clicked successfully!");
  }

  return (
    <div>
      <Header title="My React Website" />

      <h2>Our Team</h2>

      <Form onAdd={addPerson} />

      {people.map((person) => (
        <Card
          key={person.id}
          name={person.name}
          role={person.role}
        />
      ))}

      <p>Total Members: {people.length}</p>

      <Button
        text="Click Me"
        onClick={showMessage}
      />

      <Button
        text="Remove All"
        onClick={removePeople}
      />

      <Footer year={2026} />
    </div>
  );
}

export default App;
