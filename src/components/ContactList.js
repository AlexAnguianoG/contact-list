import React from "react";
import Contact from "./Contact";
import "../styles/ContactList.css";

function ContactList({ contacts, removeContact }) {
  return (
    <table>
      <colgroup span="7" className="columns"></colgroup>
      <tr className="Table-Header">
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Telephone</th>
        <th></th>
      </tr>
      {contacts.map((c) => (
        <Contact key={c.id} contact={c} removeContact={removeContact} />
      ))}
    </table>
  );
}

export default ContactList;
