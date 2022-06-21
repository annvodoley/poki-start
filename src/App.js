import React from "react";
import './App.module.scss';
import Home from "./components/Pages/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
};

export default App;
