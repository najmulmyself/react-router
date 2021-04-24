import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [user,setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            {
                user.map(eachUser =><User eachUser={eachUser}></User>)
            }
        </div>
    );
};

export default Home;