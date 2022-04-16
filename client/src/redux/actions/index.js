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

export function login ( {email, password} ){
    return async (dispach) => {
        console.log('action')
        try{
            // const config = {
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }
            const body = {email, password}
            
            const {data} = await axios.get(`http://localhost:3001/user/login`, body )
            const infoUser = data.user
            dispach({
                type: 'LOGIN_USER_SUCCESS',
                payload: infoUser
            })
            console.log(data)
           
        } catch (error) {
            console.log(error)
            return dispach({
                type: 'LOGIN_USER_ERROR',
            })
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
            const detail = await axios.get(`http://localhost:3001/movies/${id}`)
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