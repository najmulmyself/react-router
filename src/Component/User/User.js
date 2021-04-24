import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const {name,email,id} = props.eachUser;
    const userStyles = {
        margin : '10px',
        padding : '10px',
        border : '1px solid black',
        width : '500px',
        display : 'inline-flex',
    }    
    return (
        <div style={userStyles}>
            <div>
            <h1>{name}</h1>
            <p><small>{email}</small></p>
            <button><Link to={`user/${id}`}>See Details</Link></button>
            </div>
        </div>
    );
};

export default User;