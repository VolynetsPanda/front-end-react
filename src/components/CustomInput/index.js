import React, { Component } from "react";

class CustomInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, change, type = 'text', isError = false} = this.props
        let error = isError ? "red" : 'grey'
        return (
            <div className="App">
                <input
                    type={type}
                    value={value}
                    onChange={(e) => change(e, type)}
                    style={{
                        borderColor: error
                    }}
                />
            </div>
        );
    }
}
export default CustomInput;
