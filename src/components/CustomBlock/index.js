import React, { Component } from "react";

class CustomBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: 0,
            flag: this.props.flag
        }
    }

    start = () => {
        this.moveId = setInterval(() =>
            this.setState({
                move: this.state.move + 10
            }), 100)
        this.props.stop(this.moveId)
    }

    componentDidMount() {
        // console.log('testing flag => ', this.props.flag)
        this.start()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('testing prevProps => ', prevProps)
        console.log('testing prevState => ', prevState)
        // if(prevProps.flag === prevState.flag){
        //     if(prevProps.flag){
        //         this.start()
        //     }
        // }
        // if(prevProps.flag){
        //     this.start()
        // }
    }

    componentWillUnmount() {
        clearInterval(this.moveId)
    }

    render() {
        const { move } = this.state
        return <div
            style={{
                left: `${move}px`
            }}
            className="block"></div>
    }
}
export default CustomBlock;
