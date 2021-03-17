import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./ContactListItem.css";

// This is the list item component. The list items appear on the left side of the homepage.
// Data from the global list of contacts is passed to this component to visually display and
// represent an individual contact. Displays only 3 out of 4 attributes of a contact object.

function ContactListItem(props) {
  return (
    <div className="contact-list-item" onClick={props.updateStateEvent}>
      <Container fluid>
        <Row>
          <Col xl={3} lg={3} sm={3} xs={3} style={{ padding: 0 }}>
            <p className="contact-list-item-short">
              {props.contactRef.fName[0]}
              {props.contactRef.lName[0]}
            </p>
          </Col>
          <Col xl={9} lg={9} sm={9} xs={9}>
            <p className="contact-list-item-fl">
              {props.contactRef.fName + " " + props.contactRef.lName}
            </p>
            <p className="contact-list-item-pn">
              {props.contactRef.phoneNumber}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactListItem;
