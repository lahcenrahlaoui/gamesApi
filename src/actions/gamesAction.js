import axios from "axios";

import { getURL } from "../api";

export const loadGames = (x) => async (dispatch) => {
    dispatch({
        type: "IS_LOADING",
    });
    const popularx = await axios.get(getURL(x));

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularx.data.results,
        },
    });
};
export const loadOneGame = (x) => async (dispatch) => {
    dispatch({
        type: "IS_LOADING",
    });
    const oneGameX = await axios.get(getURL(x));

    dispatch({
        type: "FETCH_GAME",
        payload: {
            oneGame: oneGameX.data,
        },
    });
};
