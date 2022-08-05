import React, { Component } from "react";
import CustomInput from "../CustomInput";

class CustomHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { change, text, password } = this.props
        return (
            <header>
                <CustomInput change={change} value={text} isError />
                <CustomInput change={change} value={password} type='password' />
            </header>
        )
    }
}
export default CustomHeader;
