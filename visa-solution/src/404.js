import React from 'react';
import {Link} from "react-router-dom"

// Default page if routing fails. Includes link to contact page.

function Error404(props) {
    return (
        <div>
            <br></br><br></br>
            <h1 style={{textAlign:"center"}}>Whoops! The page you are looking for doesn't exist!</h1>
            <Link to='/'><h5 style={{textAlign: "center", color: "white", padding: "10px 20px", backgroundColor: "rgb(253, 2, 78)"}}>Click for Contacts page</h5></Link>
        </div>
    );
}

export default Error404;