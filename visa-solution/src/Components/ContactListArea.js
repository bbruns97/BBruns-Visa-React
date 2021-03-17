import React from "react";
import "./ContactListArea.css";
import { Link } from "react-router-dom";

// This component will fill the left UI area on the homepage. It will contain the individual list items.
// Component contains the contact list items as well as the link to the 'Add contact' page

function ContactListArea(props) {
  return (
    <div className="list-item-area">
      <h1 style={{ paddingLeft: "10px" }}>Contacts</h1>
      {props.items.length === 0 ? (
        <p style={{ textAlign: "center", margin: "30px 0" }}>
          You have no contacts.
        </p>
      ) : (
        props.items
      )}

      <Link
        to={{
          pathname: "/add",
        }}
      >
        <button className="add-cont-btn">Add Contact</button>
      </Link>
    </div>
  );
}

export default ContactListArea;
