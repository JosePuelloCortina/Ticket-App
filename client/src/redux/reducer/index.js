const initialState = {
  // token: localStorage.getItem("token"),
  // isAuth: null,
  userInfo: null,
  create: [],
  movies: [],
  genres: [],
  detail: [],
  detailUser:[],
  filtered: [],
  allReview: [],
  reviewInfo: [],
  tickets:[]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "POST_USER":
      return {
        ...state,
        //create: action.payload
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
      };
    case "LOGIN_FILL_STATE":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "MOVIES_DETAIL":
      return {
        ...state,
        detail: action.payload,
        //movies: action.payload
      };
    case "ALL_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "MOVIES_NAME":
      return {
        ...state,
        movies: action.payload,
      };

    case "MOVIES_FILTERED":
      return {
        ...state,
        filtered: action.payload,
        movies: { success: true, data: action.payload },
      };
    case "ALL_MOVIE_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
      //---reviews---
      case 'CREAR_REVIEW':
        return{
          ...state,
          allReview: action.payload
        }
      case ' GET_ALL_REVIEW':
        return{
          ...state,
          allReview: action.payload,
          reviewInfo: action.paload
        }
      case 'EDITAR_REVIEW':
        return{
          ...state,
          allReview: action.payload,
        }
      case "GET_USER_DETAILS":
        return{
          ...state,
          detailUser: action.payload,
          
        }
      case "GET_TICKETS":
        return{
          ...state,
          tickets: action.payload
        }
    default:
      return state;
  }
}
