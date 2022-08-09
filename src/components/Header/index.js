function Header({title}) {
    return (
        <header className="App-header">
            {title && <h1>{title}</h1>}
        </header>
    );
}
export default Header;
