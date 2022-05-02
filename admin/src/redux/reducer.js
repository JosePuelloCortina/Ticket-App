const initialState = {
    users: null,
    userDetail: [],
    admins: null,
    adminDetail: [],
    adminInfo: null,
    movies: null,
    movieDetail: [],
    ventas: null,
    categories: [],
    sucursales: null 
};


export default function rootReducer(state = initialState, action){
    if(action.type === "GET_USERS"){
        return{
            ...state,
            users: action.payload
        }
    }
    if(action.type === "GET_USER_DETAIL"){
        return{
            ...state,
            userDetail: action.payload
        }
    }
    if(action.type === "GET_ADMINS"){
        return{
            ...state,
            admins: action.payload
        }
    }
    if(action.type === "GET_ADMIN_DETAIL"){
        return{
            ...state,
            adminDetail: action.payload
        }
    }
    if(action.type === "GET_MOVIES"){
        return{
            ...state,
            movies: action.payload
        }
    }
    if(action.type === "GET_MOVIE_DETAIL"){
        return{
            ...state,
            movieDetail: action.payload
        }
    }
    if(action.type === "GET_VENTAS"){
        return{
            ...state,
            ventas: action.payload
        }
    }
    if(action.type === "GET_CATEGORIES"){
        return{
            ...state,
            categories: action.payload
        }
    }
    if(action.type === "GET_SUCURSALES"){
        return{
            ...state,
            sucursales: action.payload
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