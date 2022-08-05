import React, { Component } from "react";
import './App.css';
import CustomInput from "./components/CustomInput";
import CustomBlock from "./components/CustomBlock";
import CustomHeader from "./components/CustomHeader";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text: '',
            password: '',
            stop: 0,
            flag: false
        }
        // this.onAdd = this.onAdd.bind(this)
    }
    // onAdd(){
    onAdd = () => {
        this.setState({
            count: this.state.count + 10
        })
    }

    onRemove = () => {
        this.setState({
            count: this.state.count - 10
        })
    }

    // setValueLogin = (e) =>{
    //     console.log(e.target.value)
    //     this.setState({
    //         login: e.target.value
    //     })
    // }
    //
    // setValuePass = (e) =>{
    //     console.log(e.target.value)
    //     this.setState({
    //         password: e.target.value
    //     })
    // }

    setValue = (e, type) =>{
        this.setState({
            [type]: e.target.value
        })
    }

    getIdStop = (id) => {
        this.setState({
            stop: id
        })
    }

    onStop = () => {
        this.setState({
            stop: 0
        })
        clearInterval(this.state.stop)
    }

    onStart = () =>{
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        const { count, password, text, stop, flag } = this.state
        // console.log('testing flag 2 => ', flag)
        return (
            <div className="App">
                <h1>Test: {count}</h1>
                <div>
                    <button onClick={this.onAdd}>add</button>
                    {Boolean(count) && <button onClick={this.onRemove}>remove</button>}
                </div>
                                {/*<div style={{*/}
                {/*    left: `${count}px`*/}
                {/*}} className="block"></div>*/}
                {/*<CustomBlock flag={flag} stop={this.getIdStop} />*/}
                {/*{!!stop*/}
                {/*    ? <button onClick={this.onStop}>stop</button>*/}
                {/*    : <button onClick={this.onStart}>start</button>*/}
                {/*}*/}
                <CustomHeader change={this.setValue} text={text} password={password} />
            </div>
        );
    }
}
export default App;
