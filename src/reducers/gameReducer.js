export const initState = { 
    popular :[] , 
    oneGame :[]
};


const gameReducer = (state = initState , action) =>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state , popular : action.payload.popular}
        case "FETCH_GAME":
            return {...state , oneGame : action.payload.oneGame}
        default:
            return {...state}    
    }
}

export default gameReducer