import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import About from "./views/About";
import ErrorPage from "./views/ErrorPage";
import Users from "./views/Users";
import Profile from "./views/Profile";
import Player from "./views/Player";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route exact path='/users' element={<Users/>}/>
                <Route exact path='/player' element={<Player/>}/>
                <Route exact path='/users/:id' element={<Profile/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}
export default App;
