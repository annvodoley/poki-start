import React, {useEffect} from "react";
import './App.module.scss';
import Home from "./components/Pages/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import PokemonCard from "./components/Pages/PokemonCard/PokemonCard";
import {useDispatch} from "react-redux";
import {fetchPokemonsApiAction} from "./state/pokemons/actions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonsApiAction())
    }, [])
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
