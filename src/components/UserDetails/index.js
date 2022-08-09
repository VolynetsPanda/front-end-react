import React, { useState, useEffect } from "react";
function UserDetails({id = ''}) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(res => res.json())
            .then(res => setUser(res))
    }, [id])
    return user ? (
        <div className='user-list'>
            <h4>{user.name}</h4>
            <img src={user?.sprites?.front_default} alt=""/>
        </div>
    ) : <p>Loading...</p>;
}
export default UserDetails;
