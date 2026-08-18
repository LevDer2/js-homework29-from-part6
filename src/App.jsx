import "./App.css";
import Form from "./components/Form/Form.jsx";
import ListContacts from "./components/ListContacts/ListContacts.jsx";
import { useState } from "react";
import {nanoid} from "nanoid";
import { addContact, deleteContact } from "./components/redux/contactsSlice.js"
import { changeFilter } from "./components/redux/filterSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/Filter/Filter.jsx";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const handleSubmit = (e) => {
    e.preventDefault();
      const isExist = contacts.some(
          (contact) => contact.name.toLowerCase() === name.toLowerCase(),
      );
      if (isExist) {
          alert(`${name} is already in contacts.`);
          return;
      }
      const newContact = {
          id: nanoid(),
          name: name,
          number: number,
      };

      dispatch(addContact(newContact));
      setName("");
      setNumber("");
  };

  const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

 const handleFilterChange = (value) => {
     dispatch(changeFilter(value))
 }

  return (
    <div>
      <h1>Phone Book</h1>
      <Form
          name={name}
          number={number}
          handleSubmit={handleSubmit}
          setName={setName}
          setNumber={setNumber}
      />
      <Filter filter={filter} setFilter={handleFilterChange}/>
      <ListContacts contacts={filteredContacts} deleteContact={deleteContact} dispatch={dispatch}/>
    </div>
  );
}

export default App;
