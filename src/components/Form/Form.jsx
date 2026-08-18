import React from "react";

function Form({name, number, handleSubmit, setName, setNumber}) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Name</h2>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <h2>Number</h2>
      <input type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default Form;
