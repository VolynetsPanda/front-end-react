import React, { useState, useEffect } from "react";
function UserList({page, select, getName}) {
    const [users, setUsers] = useState([])
    const isUsers = !!users.length
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + (page * 20))
            .then(res => res.json())
            .then(res => setUsers(res.results))
    }, [page])
    const click = (e, name) => {
        e.preventDefault()
        getName(name)
    }
    const link = (name) => {
        let color = name == select ? 'red' : 'black'
        return <a href='#' onClick={(e) => click(e, name)}
           style={{color}}
        >{name}</a>
    }

    return isUsers && (
        <ul className='user-list'>{
            users.map(elem => (
                <li>{link(elem.name)}</li>
            ))
        }</ul>
    )

    return <p>Loading...</p>;
}
export default UserList;
