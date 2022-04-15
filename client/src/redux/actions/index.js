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