export const initState = {
    popular: [],
    oneGame: [],
    isLoding: true,
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return {
                ...state,
                isLoding: true,
            };
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                isLoading: false,
            };
        case "FETCH_GAME":
            return {
                ...state,
                oneGame: action.payload.oneGame,
                isLoading: false,
            };
        default:
            return { ...state };
    }
};

export default gameReducer;
