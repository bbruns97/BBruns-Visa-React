import React from "react";
import { Link } from "react-router-dom";
import "./SelectedContactCard.css";
import { Col, Row, Container } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";

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
    return result;
  }
  return (
    <div className="sel-card-wrapper">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Container fluid>
        <Row>
          <Col xl={12} lg={12} sm={12} xs={12}>
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt="Default image."
              style={{ borderRadius: "50%", width: "100%" }}
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
          <Col xl={12} lg={12} sm={12} xs={12}>
            <p className="card-number">
              <Icon style={{ verticalAlign: "-5px" }}>call</Icon>{" "}
              {props.sel.phoneNumber}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} sm={12} xs={12}>
            <p className="card-email">
              <Icon style={{ verticalAlign: "-5px" }}>email</Icon>{" "}
              {props.sel.emailAddress}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} sm={12} xs={12}>
            <Link
              to={{
                pathname: "/edit/" + props.sel.emailAddress,
                state: { editableContact: props.sel },
              }}
            >
              <button className="card-btn edit-btn">Edit</button>
            </Link>
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
