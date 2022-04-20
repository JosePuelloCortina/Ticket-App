const initialState = {
    allElements: [],
    detail: []
};


export default function rootReducer(state = initialState, action){
    if(action.type === "ALL_ELEMENTS"){
        return{
            ...state,
            allElements: action.payload
        }
    }
    if(action.type === "ELEMENT_DETAIL"){
        return{
            ...state,
            detail: action.payload
        }
    }
    else{
        return state;
    }
};