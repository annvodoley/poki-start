import React from 'react';
import classes from './Home.module.scss';
import Input from "../../Input/Input";
import Cards from "../../Cards/Cards";
import ditto from "../../../images/Cards/ditto.svg";
import bulbasaur from "../../../images/Cards/bulbasaur.svg";
import weedle from "../../../images/Cards/weedle.svg";
import beedrill from "../../../images/Cards/beedrill.svg";
import Header from "../../Header/Header";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Input/>
            <Cards title = 'Ditto' url={ditto}/>
            <Cards title = 'Bulbasaur' url={bulbasaur}/>
            <Cards title = 'Weedle' url={weedle}/>
            <Cards title = 'Beedrill' url={beedrill}/>
        </div>
    );
};

export default Home;
