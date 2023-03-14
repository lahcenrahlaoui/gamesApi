import axios from "axios";

import {getURL} from "../api"

export const loadGames =  (x) => async (dispatch) => {
    
    const popularx = await axios.get( getURL(x) );

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularx.data.results,
        },
    });
};
export const loadOneGame =  (x) => async (dispatch) => {
    
    const oneGameX = await axios.get( getURL(x) );

    dispatch({
        type: "FETCH_GAME",
        payload: {
            oneGame: oneGameX.data
        },
    });
};

