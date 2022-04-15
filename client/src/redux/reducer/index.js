const initialState = {
    // token: localStorage.getItem("token"),
    // isAuth: null,
    create:[],
    detail: [],
    
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'POST_USER':
            return{
                ...state,
                //create: action.payload
            }

        default: return state;
    }
}