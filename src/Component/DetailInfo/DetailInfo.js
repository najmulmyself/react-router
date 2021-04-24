import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailInfo = () => {
    const [detailUser,setDetailUser] = useState([])
    const {userId} = useParams()
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setDetailUser(data))
    },[])
    return (
        <div>
            <h1>Full Name : {detailUser.name}</h1>
            <p>Website : {detailUser.website}</p>
            <p>Phone : {detailUser.phone}</p>
            <p>Username : {detailUser.username}</p>
        </div>
    );
};

export default DetailInfo;