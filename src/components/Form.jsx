
import { useState } from "react";

function Form({ onAdd }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    }

    onAdd(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Add Person</button>
    </form>
  );
}

export default Form;
