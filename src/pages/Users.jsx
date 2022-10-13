import { useParams } from 'react-router-dom';
// import React, { useEffect } from 'react';

function Users() {
    const { id } = useParams()

    // useEffect(() => {
    //     // fetch(`https://api.instagram.com/${username}`)
    // }, [])
    // console.log(username)
    return <h1>{id}</h1>
}

export default Users