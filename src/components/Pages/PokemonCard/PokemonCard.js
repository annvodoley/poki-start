import React from 'react';
import classes from './PokemonCard.module.scss';

const PokemonCard = () => {
    return (
        <div className={classes.PokemonCard}>
            <div>
                <img src="" alt=""/>
                <button>Back</button>
            </div>
            <div>
                <h1>Bulbasaur</h1>
                <h2>Stats</h2>
                <div>
                    <p>hp</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;