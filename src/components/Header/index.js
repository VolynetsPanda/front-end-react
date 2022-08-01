function Header(props) {
    console.log(props)
    return (
        <header>
            <h1 onClick={(e) => props.click(e, 'orange')}>{props.title}</h1>
            {props.children}
            {props.component()}
        </header>
    );
}

export default Header;
