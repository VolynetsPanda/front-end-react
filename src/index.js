import React, { useState } from "react";
import App from "./app";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "store/index";

function Init() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    )
}

ReactDOM.render(<Init />, document.getElementById('root'));

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
