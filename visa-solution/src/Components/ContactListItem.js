import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./ContactListItem.css";

function ContactListItem(props) {
  return (
    <div className="contact-list-item" onClick={props.updateStateEvent}>
      <Container fluid>
        <Row>
          <Col xl={3} lg={3} sm={3} xs={3} style={{ paddingRight: 0 }}>
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
