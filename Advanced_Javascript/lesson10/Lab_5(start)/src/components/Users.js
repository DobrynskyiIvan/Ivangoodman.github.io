import React, { useState, useEffect } from "react";

const Users = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
            .then(r => r.json())
            .then(names => setNames(names?.results));
    }, []);

    return (
        <ul>
            {names.map((user, i) => (
                <li key={i}>
                    {user.name} - {user.gender}
                </li>
            ))}
        </ul>
    );
};

export default Users;
