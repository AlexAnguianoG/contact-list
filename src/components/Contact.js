import React, { lazy } from "react";
import "../styles/Contact.css";
import img from "../img/1.jpg";

function Contact({ contact, removeContact, editContact }) {
  function handleRemoveClick() {
    removeContact(contact.id);
  }
  function handleEditClick() {
    editContact(contact.id);
  }
  // const image = await import("../img/" + 4 + ".jpg");
  // const image = lazy(() => import("../img/" + 4 + ".jpg"));
  return (
    <tr className="Contact">
      <td>
        <img src={img} alt="" width="80" height="80" />
      </td>
      <td>{contact.name}</td>
      <td>{contact.address}</td>
      <td>{contact.email}</td>
      <td>{contact.telephone}</td>
      <td>
        <button className="Edit-Button" onClick={handleEditClick}>
          Edit
        </button>
        <button className="Delete-Button" onClick={handleRemoveClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Contact;
