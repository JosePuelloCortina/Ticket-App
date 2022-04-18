import axios from "axios";


export function getuserDetails(id) {
    return async function (dispach) {
        try {
            const detail = await axios.get(`http://localhost:3001/user/${id}`)

            dispach({
                type: 'GET_USER_DETAILS',
                payload: detail.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function logout() {
    return { type: 'LOGOUT_USER' }
}

export function login ( email, password ){
    return async function(dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/user/login?email=${email}&&password=${password}`)
            
            return dispatch({
                type: 'LOGIN_USER_SUCCESS',
                payload: json.data
            })   
        } catch (error) {
            alert(error)
        }
    }    
}

export function loginGoogleFill ( payload ){
    return async function(dispatch){
        try{
            return dispatch({
                type: 'FILL_USER_GOOGLE',
                payload
            })   
        } catch (error) {
            alert(error)
        }
    }    
    
}

export function postUser(payload){
    //console.log(payload)
    return async function (dispatch){
        try{
            const create = await axios.post(`http://localhost:3001/user`, payload);
            return dispatch({
                 type: 'POST_USER',
                payload: create
             })
        }catch(error){
            console.log(error)
   
        }
    }  
}

export function moviesDetail(id){
    return async function (dispach){
        try{
            const detail = await axios.get(`http://localhost:3001/movies/id/${id}`)
            console.log(detail)
            return dispach({
                type:'MOVIES_DETAIL',
                payload: detail.data
            })
        }catch(error){
            console.log(error)
            
        }
    }
}

export function allMovies(){
    return async function(dispatch){
        try{
            const movies = await axios.get(`http://localhost:3001/movies`)
            return dispatch({
                type: 'ALL_MOVIES',
                payload: movies.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function moviesByName(name){
    return async function(dispatch){
        try{
            const movies = await axios.get(`http://localhost:3001/movies/name/${name}`)
            return dispatch({
                type: 'MOVIES_NAME',
                payload: movies.data
            })
        }catch(error){
            console.log(error)
        }
    }
}