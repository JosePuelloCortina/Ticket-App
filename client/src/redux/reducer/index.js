const initialState = {
    // token: localStorage.getItem("token"),
    // isAuth: null,
    userInfo: null,
    create:[],
    movies:[],
    detail: [],
    
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'POST_USER':
            return{
                ...state,
                //create: action.payload
            }
            case 'LOGIN_USER_SUCCESS':
                return {
                    ...state,
                    userInfo: action.payload
                }
            case 'USER_LOGOUT':
            return {
                ...state,
                userInfo: null
            }
            case 'LOGIN_FILL_STATE':
                return {
                    ...state,
                    userInfo: action.payload
                }
            case 'MOVIES_DETAIL':
                return{
                    ...state,
                    detail: action.payload,
                    //movies: action.payload
                }
            case 'ALL_MOVIES':
                return{
                    ...state,
                    movies: action.payload
                }
            case 'MOVIES_NAME':
            return{
                ...state,
                movies: action.payload
            }
        default: 
            return state;
    }
}