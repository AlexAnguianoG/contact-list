import React, { useState } from "react";

import "../styles/ContactForm.css";

function ContactForm({ addContact }) {
  let id = 0;
  const [contact, setContact] = useState({
    id: "",
    image: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  function handleContactNameChange(e) {
    setContact({ ...contact, name: e.target.value });
  }
  function handleContactAddressChange(e) {
    setContact({ ...contact, address: e.target.value });
  }
  function handleContactEmailChange(e) {
    setContact({ ...contact, email: e.target.value });
  }
  function handleContactTelephoneChange(e) {
    setContact({ ...contact, phone: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      contact.name.trim() &&
      contact.address.trim() &&
      contact.email.trim() &&
      contact.phone.trim()
    ) {
      id++;
      addContact({ ...contact, id: id });

      setContact({
        ...contact,
        image: "../img/1.jpg",
        name: "",
        address: "",
        email: "",
        phone: "",
      });
    }
  }

  return (
    <form className="Contact-form" onSubmit={handleSubmit}>
      {/* <input type="file" id="image" name="image" /> */}
      <input
        className="Input-form"
        name="name"
        type="text"
        placeholder="Name"
        value={contact.name}
        onChange={handleContactNameChange}
        required
      />
      <input
        className="Input-form"
        name="address"
        type="address"
        placeholder="Address"
        value={contact.address}
        onChange={handleContactAddressChange}
        required
      />
      <input
        className="Input-form"
        name="email"
        type="email"
        placeholder="E-mail"
        value={contact.email}
        onChange={handleContactEmailChange}
        required
      />
      <input
        className="Input-form"
        name="phone"
        type="tel"
        placeholder="Telephone number"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        maxLength="10"
        value={contact.phone}
        onChange={handleContactTelephoneChange}
        required
      />
      <button className="Button-form" type="submit">
        Add
      </button>
    </form>
  );
}

export default ContactForm;
