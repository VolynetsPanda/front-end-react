
function UsersItem(
    {
        dissabled
    }
) {
    const click = (e) => {
        dissabled && e.preventDefault()
    }
    return (
        <li>
            <a href="#" onClick={click} >Vasya</a>
        </li>
    );
}
export default UsersItem;
