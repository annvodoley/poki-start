import {REQUEST_POKEMON_FAILURE, REQUEST_POKEMON_LOADING, REQUEST_POKEMON_SUCCESS} from "./types";


export const fetchPokemonsApiAction = () => {
    return dispatch => {
        dispatch({type:REQUEST_POKEMON_LOADING})
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => response.json())
            .then(res => {
                dispatch({type:REQUEST_POKEMON_SUCCESS})
                console.log(res)
            })
            .catch(()=> dispatch({type:REQUEST_POKEMON_FAILURE}))
    }
}

