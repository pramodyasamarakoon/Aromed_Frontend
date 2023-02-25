import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/user/allUsers')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.userId}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;
