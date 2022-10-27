import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
    const { id } = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data)
        console.log(data)
    }

    // useEffect(() => {
    //     // fetch(`https://api.instagram.com/${username}`)
    // }, [])
    // console.log(username)

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            <Link to="/"> Go back</Link>
            <p>{ user.id }</p>
            <p>{ user.name }</p>
            <p>{ user.email }</p>
            <p>{ user.username }</p>
        </div>
    )
}

export default Users