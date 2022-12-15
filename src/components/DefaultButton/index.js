
function DefaultButton(
    {
        title = '',
        click = () => {}
    }
) {
    return (
        <button onClick={click}>{title}</button>
    );
}
export default DefaultButton;
