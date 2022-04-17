const initialState = {
    // token: localStorage.getItem("token"),
    // isAuth: null,
    userInfo:[],
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
                console.log(action.payload)
                return {
                    ...state,
                    userInfo: action.payload
                }
            case 'LOGIN_USER_ERROR':
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
        default: 
            return state;
    }
}
