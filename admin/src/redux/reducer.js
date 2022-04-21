const initialState = {
    allElements: [],
    detail: [],
    adminInfo: null
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
    if(action.type === "LOGIN_ADMIN"){
        return{
            ...state,
            adminInfo: action.payload
        }
    }
    if(action.type === "LOG_OUT"){
        return{
            ...state,
            adminInfo: null
        }
    }
    else{
        return state;
    }
};