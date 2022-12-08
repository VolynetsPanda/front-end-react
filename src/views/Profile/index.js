import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
    let { id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUser(res)
            })
    }, [id]);
console.log(user, id)
    return (
        <div className="App">
            <h2>Profile {user?.name || ""}</h2>
        </div>
    );
}
export default Profile;
