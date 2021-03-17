import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./EditContactPage.css";
import Error404 from "../404.js";

// This is the form page where the user can edit a contact.

function EditContactPage({ match, location, props }) {
  // Get the email address (used as a key since there is no ID) from the URL
  const {
    params: { email },
  } = match;

  var contactLocStorage = JSON.parse(localStorage.getItem("contact-list"));

  const [contactList, updateContactList] = useState(contactLocStorage);

  // Edit a corresponding contact using the form data after a submission.
  const editContact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    const indexOfEdit = getContactFromEmail(email);
    contactList[indexOfEdit].fName = formDataObj.fName.trim();
    contactList[indexOfEdit].lName = formDataObj.lName.trim();
    contactList[indexOfEdit].phoneNumber = formDataObj.pNum.trim();
    contactList[indexOfEdit].emailAddress = formDataObj.emailAddress.trim();
    localStorage.setItem("contact-list", JSON.stringify(contactList));
    alert("Successfully updated contact info!");
  };

  // Function to get the index of the contact, obtained by searching for the email address
  const getContactFromEmail = (emailAddress) => {
    for (var i = 0; i <= contactList.length; i++) {
      if (contactList[i] && contactList[i].emailAddress === emailAddress) {
        return i;
      }
    }
    return null;
  };

  // Check if the email parameter exists in the contacts list. Display an error if it doesnt exist.
  return (
    <div>
      {getContactFromEmail(email) === null ? (
        <Error404></Error404>
      ) : (
        <Container fluid>
          <Row>
            <Col xl={12} lg={12} sm={12} xs={12} style={{ padding: "0" }}>
              <div className="edit-contact-wrapper">
                <h3>Edit Contact</h3>
                <p>You are editing {email}</p>
                <br />
                <Form onSubmit={editContact}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="fName"
                      defaultValue={contactList[getContactFromEmail(email)].fName}
                      placeholder="New first name"
                    />
                    <br />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lName"
                      defaultValue={contactList[getContactFromEmail(email)].lName}
                      placeholder="New last name"
                    />
                    <br />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="pNum"
                      defaultValue={
                        contactList[getContactFromEmail(email)].phoneNumber
                      }
                      placeholder="New number"
                    />
                    <br />
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="emailAddress"
                      defaultValue={
                        contactList[getContactFromEmail(email)].emailAddress
                      }
                      placeholder="New email"
                    />
                    <br />
                    <Button
                      style={{
                        backgroundColor: "rgb(253, 2, 78)",
                        border: "1px solid rgb(253, 2, 78)",
                      }}
                      variant="primary"
                      type="submit"
                    >
                      Save
                    </Button>
                    <Link
                      style={{ paddingLeft: "20px", color: "rgb(253, 2, 78)" }}
                      to="/"
                    >
                      Cancel
                    </Link>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default EditContactPage;
