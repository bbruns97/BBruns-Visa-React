import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./AddContactPage.css";
import { Link } from "react-router-dom";

function AddContactPage(props) {
  
  // Function collects form data and creates a new contact. The contact is then added to local storage.
  const addContact = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    
    var newContact = {
      fName: formDataObj.fName,
      lName: formDataObj.lName,
      phoneNumber: formDataObj.pNum,
      emailAddress: formDataObj.emailAddress,
    };
    
    var currentContacts = JSON.parse(localStorage.getItem("contact-list"));
    currentContacts.push(newContact);
    localStorage.setItem("contact-list", JSON.stringify(currentContacts));
    
    alert("New contact has been added successfully!");
  };
  return (
    <Container fluid>
      <Row>
        <Col xl={12} lg={12} sm={12} xs={12} style={{ padding: "0" }}>
          <div className="add-contact-wrapper">
            <h3>Add Contact</h3>
            <br />
            <Form onSubmit={addContact}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="fName"
                  placeholder="Enter your first name"
                />
                <br />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="lName"
                  placeholder="Enter your last name"
                />
                <br />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="pNum"
                  placeholder="Enter your number"
                />
                <br />
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="emailAddress"
                  placeholder="Enter your email"
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
                  Add
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
  );
}

export default AddContactPage;
