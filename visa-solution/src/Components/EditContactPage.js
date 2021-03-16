import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function EditContactPage({ match, location, props }) {
  const {
    params: { email },
  } = match;
  return (
    <div>
      <p>you are on the edit page.</p>
      <p>you are editing {email}</p>
      <p>{location.state.editableContact.fName}</p>
      <Link to="/">back</Link>
    </div>
  );
}

export default EditContactPage;
