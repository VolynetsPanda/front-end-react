import React, { Component } from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Player from "./components/Player";

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
