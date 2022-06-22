import React from "react";
import './App.module.scss';
import Home from "./components/Pages/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import PokemonCard from "./components/Pages/PokemonCard/PokemonCard";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/pokemon" element={<PokemonCard/>}/>
            </Routes>
        </div>
    );
};

export default App;
