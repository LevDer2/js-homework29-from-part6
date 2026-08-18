function ListContacts({contacts, deleteContact, dispatch}) {
  return (
    <ul>
        {contacts.map(contact => (
            <li key={contact.id}>
                {contact.name}: {contact.number}
                <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
            </li>
        ))}
    </ul>
  );
}

export default ListContacts;
