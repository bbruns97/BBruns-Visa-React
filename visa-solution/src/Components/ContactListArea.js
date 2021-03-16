import React from "react";
import "./ContactListArea.css";

function ContactListArea(props) {
  return (
    <div className="list-item-area">
      <h1 style={{ paddingLeft: "10px" }}>Contacts</h1>
      {props.items}
    </div>
  );
}

export default ContactListArea;
