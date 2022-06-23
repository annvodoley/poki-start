import {REQUEST_POKEMON_SUCCESS} from "./types";

const initialState = {
    pokemons: []
}

 export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POKEMON_SUCCESS:
            return {...state, pokemons: action.payload}
        default:
            return (state)
    }
}