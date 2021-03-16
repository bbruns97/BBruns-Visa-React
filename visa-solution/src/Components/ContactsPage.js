import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactListArea from "./ContactListArea";
import ContactListItem from "./ContactListItem";
import SelectedContactCard from "./SelectedContactCard";

function ContactsPage({ match, location }) {
  var contact = {
    fName: "Bill",
    lName: "Johnson",
    phoneNumber: "394-039-8374",
    emailAddress: "billj44@gmail.com",
  };

  var contact2 = {
    fName: "Hank",
    lName: "Williamson",
    phoneNumber: "029-384-8374",
    emailAddress: "hankw999@aol.com",
  };

  var contact3 = {
    fName: "Pat",
    lName: "Richardson",
    phoneNumber: "293-483-2934",
    emailAddress: "prich22@yahoo.com",
  };

  var originalContacts = [contact, contact2, contact3];

  var arr = JSON.parse(window.localStorage.getItem("contact-list"));

  if (arr === null) {
    localStorage.setItem("contact-list", JSON.stringify(originalContacts));
  }

  const [contactsList, updateContactsList] = useState(arr || originalContacts);
  const [selectedContact, updateSelectedContact] = useState(null);

  var contactListElements = contactsList.map((contact) => (
    <ContactListItem
      contactRef={contact}
      updateStateEvent={() => updateSelectedContact(contact)}
    ></ContactListItem>
  ));

  var selectedCard = (
    <SelectedContactCard
      sel={selectedContact}
      listRef={contactsList}
    ></SelectedContactCard>
  );

  return (
    <Container fluid>
      <Row>
        <Col xl={3} lg={3} sm={6} xs={6} style={{ padding: 0 }}>
          <ContactListArea items={contactListElements} />
        </Col>
        <Col xl={9} lg={9} sm={6} xs={6} style={{ padding: "20px" }}>
          {selectedContact === null ? (
            <p style={{ width: "100%", fontSize: "40px", textAlign: "center" }}>
              Select a contact.
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
