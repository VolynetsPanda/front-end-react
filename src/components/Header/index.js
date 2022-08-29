import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)

    // const {user, setUser} = useContext(ContextUser)
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: "ADD_USER",
                    payload: res.results
                })
            })
    }, [])

    const removeUser = (name) => {
        dispatch({
            type: "REMOVE_USER",
            payload: name
        })
    }
    return (
        <header>
            {users.length && users?.map((elem, i) =>
                <p key={i} onClick={() => removeUser(elem.name)}>{elem.name}</p>
            )}
        </header>
    )
}

export default Header;
