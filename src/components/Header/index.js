import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName='active' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/users'>Users</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/player'>Player</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
