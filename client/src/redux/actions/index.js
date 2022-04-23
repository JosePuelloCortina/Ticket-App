import axios from "axios";


export function getuserDetails(id) {
    return async function (dispach) {
        try {
            const detail = await axios.get(`/user/${id}`)

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
    return async function(dispatch){
        try {
            window.localStorage.removeItem("userLogged");
            return dispatch({
                type: "USER_LOGOUT"
            });
        } catch (error) {
            alert(error)
        }
    }
}

export function login ( email, password ){
    return async function(dispatch){
        try{
            const json = await axios.get(`/user/login?email=${email}&&password=${password}`)
            window.localStorage.setItem("userLogged", JSON.stringify(json.data))      
            return dispatch({
                type: 'LOGIN_USER_SUCCESS',
                payload: json.data
            })   
        } catch (error) {
            alert(error)
        }
    }    
}

export function loginFillState (){
    return async function(dispatch){
        try{
            const user = window.localStorage.getItem("userLogged");
            const json = JSON.parse(user);
            return dispatch({
                type: 'LOGIN_FILL_STATE',
                payload: json
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
            const create = await axios.post(`/user`, payload);
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
            const detail = await axios.get(`/movies/id/${id}`)
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
            const movies = await axios.get(`/movies`)
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
            const movies = await axios.get(`/movies/name/${name}`)
            return dispatch({
                type: 'MOVIES_NAME',
                payload: movies.data
            })
        }catch(error){
            console.log(error)
        }
    }
}