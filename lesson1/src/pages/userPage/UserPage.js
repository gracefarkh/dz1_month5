import axios from 'axios';
import React, { useEffect, useState } from 'react'


const url = 'https://jsonplaceholder.typicode.com/users'

function UserPage() {
    const [users, SetUsers] = useState([]);

    useEffect(() =>{
        axios
            .get(url)
            .then(data => {
                SetUsers(data.data)
            })
    } , [])
    return (
        <>
            <h1>User Page</h1>
            {users.map(user => {
                return(
                    <p className='violet'>{user.id}.{user.name}</p>
                )
            })}
        </>
    )
}

export default UserPage
