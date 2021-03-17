import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactListArea from "./ContactListArea";
import ContactListItem from "./ContactListItem";
import SelectedContactCard from "./SelectedContactCard";

// This is the home page. Display all contacts and an area to display the selected contact detail view.

function ContactsPage({ match, location }) {

  // Create 3 contact objects and pre-fill their data.
  var contact = {
    fName: "Bill",
    lName: "Johnson",
    phoneNumber: "394-039-8374",
    emailAddress: "billj44@gmail.com",
  };

  var contact2 = {
    fName: "Hank",
    lName: "Williams",
    phoneNumber: "029-384-8374",
    emailAddress: "hankw999@aol.com",
  };

  var contact3 = {
    fName: "Pat",
    lName: "Richards",
    phoneNumber: "293-483-2934",
    emailAddress: "prich22@yahoo.com",
  };

  // Create a default array in the case of a first-load
  var originalContacts = [contact, contact2, contact3];

  // Attempt to get the contact list from local storage
  var arr = JSON.parse(window.localStorage.getItem("contact-list"));

  // If the array is null from local storage, use the default starter array
  if (arr === null) {
    localStorage.setItem("contact-list", JSON.stringify(originalContacts));
  }

  // Set the state of the homepage to hold the array of contacts as well as the currently selected
  // contact. Selected contact is defaulted to null.
  const [contactsList, updateContactsList] = useState(arr || originalContacts);
  const [selectedContact, updateSelectedContact] = useState(null);

  // Create the list items using the contacts array
  var contactListElements = contactsList.map((contact) => (
    <ContactListItem
      contactRef={contact}
      updateStateEvent={() => updateSelectedContact(contact)}
    ></ContactListItem>
  ));
  
  // Create the selected contact detail view
  var selectedCard = (
    <SelectedContactCard
      sel={selectedContact}
      listRef={contactsList}
    ></SelectedContactCard>
  );

  return (
    <Container fluid>
      <Row>
        <Col xl={3} lg={3} sm={6} xs={6} style={{ padding: "0" }}>
          <ContactListArea items={contactListElements} />
        </Col>
        <Col xl={9} lg={9} sm={6} xs={6} style={{ padding: "20px" }}>
          {selectedContact === null ? (
            <p style={{ width: "100%", fontSize: "30px", textAlign: "center" }}>
              Select a contact to view details
            </p>
          ) : (
            selectedCard
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsPage;
