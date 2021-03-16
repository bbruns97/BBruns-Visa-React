import React from "react";
import { Link } from "react-router-dom";
import "./SelectedContactCard.css";
import { Col, Row, Container } from "react-bootstrap";

function SelectedContactCard(props) {
  function deleteSelectedContact() {
    var result = window.confirm(
      "Are you sure you want to delete the selected contact?"
    );
    if (result) {
      var newContacts = props.listRef;
      newContacts.splice(getContactIndexIfExists(props.sel.emailAddress), 1);
      localStorage.setItem("contact-list", JSON.stringify(newContacts));
      window.location.reload();
    }
  }
  function getContactIndexIfExists(email) {
    var index = 0;
    var result = 0;
    props.listRef.forEach((contact) => {
      if (contact.emailAddress === email) {
        result = index;
      }
      index++;
    });
    alert(result);
    return result;
  }
  return (
    <div className="sel-card-wrapper">
      <Container fluid>
        <Row>
          <Col xl={12} lg={12} sm={12} xs={12}>
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt="Default image."
              style={{ borderRadius: "50%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} sm={12} xs={12}>
            <p className="card-full-name">
              {props.sel.fName + " " + props.sel.lName}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6} sm={6} xs={6}>
            <p className="card-number">{props.sel.phoneNumber}</p>
          </Col>
          <Col xl={6} lg={6} sm={6} xs={6}>
            <p className="card-email">{props.sel.emailAddress}</p>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6} sm={6} xs={6}>
            <Link
              to={{
                pathname: "/email/" + props.sel.emailAddress,
                state: { editableContact: props.sel },
              }}
            >
              <button className="card-btn edit-btn">Edit</button>
            </Link>
          </Col>
          <Col xl={6} lg={6} sm={6} xs={6}>
            <button className="card-btn" onClick={deleteSelectedContact}>
              Delete
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SelectedContactCard;
