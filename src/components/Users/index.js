import {Link, useLocation} from "react-router-dom";

function Users() {
    let { pathname } = useLocation()
    // let url = window.location.pathname
    return (
        <div className="App">
            <h1>Users</h1>
            <ul>
                <li>
                    <Link
                        to={`${pathname}/1`}
                    >Vasya</Link>
                </li>
                <li>
                    <Link
                        to={`${pathname}/2`}
                    >Petya</Link>
                </li>
            </ul>
        </div>
    );
}
export default Users;
