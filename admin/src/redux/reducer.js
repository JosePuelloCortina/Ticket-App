const initialState = {
    allElements: []
};


export default function rootReducer(state = initialState, action){
    if(action.type === "ALL_ELEMENTS"){
        return{
            ...state,
            allElements: action.payload
        }
    }
    else{
        return state;
    }
};