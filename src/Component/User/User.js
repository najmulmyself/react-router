import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {
    const {name,email,id} = props.eachUser;
    const userStyles = {
        margin : '10px',
        padding : '10px',
        border : '1px solid black',
        width : '500px',
        display : 'inline-flex',
    }    
    // To use onclick React Router has built in hook call useHistory.we need to call it
    const history = useHistory()
    // then we need to add event handlers ,it will want a parameter so that it can dynamically changes the key.
    const handleClick = userId => history.push(`/user/${userId}`);
    // history.push is useHistory() hooks statement. more about useHistory in React Router official documentation.
    return (
        <div style={userStyles}>
            <div>
            <h1>{name}</h1>
            <p><small>{email}</small></p>
            <Link to={`user/${id}`}>See Details</Link>
            {/* handleClick function wil need to pass an argument which is an id. */}
            <button onClick={() => handleClick(id)}>Click to see </button>
            </div>
        </div>
    );
};

export default User;