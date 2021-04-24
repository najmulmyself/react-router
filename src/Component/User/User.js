import React, { useEffect, useState } from 'react';

const User = (props) => {
    const {name,email} = props.eachUser;
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
            <button onClick={ () => console.log('clicked')}>See Details</button>
            </div>
        </div>
    );
};

export default User;