import axios  from 'axios';

// export function (){
//     return async function(dispatch){
//         try {
//             const json = await axios.get("http://localhost:3001/");
    //        dispatch({
    //            type: "ALL_ELEMENTS",
    //            payload: json.data
    //        });
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export function getUsers(){
    return async function(dispatch){
        try {
            const json = await axios.get("http://localhost:3001/user");
            dispatch({
                type: "ALL_ELEMENTS",
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getUserDetail(id){
    return async function(dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/user?id=${id}`);
            dispatch({
                type: "ELEMENT_DETAIL",
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getAdmins(){
    return async function(dispatch){
        try {
            const json = await axios.get("http://localhost:3001/admin");
           dispatch({
               type: "ALL_ELEMENTS",
               payload: json.data
           });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getAdminDetail(id){
    return async function(dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/admin?id=${id}`);
            dispatch({
                type: "ELEMENT_DETAIL",
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getMovies(){
    return async function(dispatch){
        try {
            const json = await axios.get("http://localhost:3001/movies");
           dispatch({
               type: "ALL_ELEMENTS",
               payload: json.data.data
           });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getMovieDetail(id){
    return async function(dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/movies/id/${id}`);
            dispatch({
                type: "ELEMENT_DETAIL",
                payload: json.data.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCategorias(){
    return async function(dispatch){
        try {
            const json = await axios.get("http://localhost:3001/categorias");
           dispatch({
               type: "ALL_ELEMENTS",
               payload: json.data
           });
        } catch (error) {
            console.log(error);
        }
    }
}

export function deleteElement(path, id){
    return async function(dispatch){
        try {
            await axios.delete(`http://localhost:3001/${path}?id=${id}`);
           dispatch({
               type: "DELETE_ELEMENT"
           });
           alert("Elemento eliminado")
        } catch (error) {
            alert(error);
        }
    }
}

export function editUser(id, edit){
    return async function(dispatch){
        try {
            await axios.put(`http://localhost:3001/user?id=${id}`, edit);
           dispatch({
               type: "EDIT_ELEMENT"
           });
           alert("Elemento cambiado")
        } catch (error) {
            alert(error);
        }
    }
}

export function editAdmin(id, edit){
    return async function(dispatch){
        try {
            await axios.put(`http://localhost:3001/admin?id=${id}`, edit);
           dispatch({
               type: "EDIT_ELEMENT"
           });
           alert("Elemento cambiado")
        } catch (error) {
            alert(error);
        }
    }
}

export function editMovie(id, edit){
    return async function(dispatch){
        try {
            await axios.put(`http://localhost:3001/movies/${id}`, edit);
           dispatch({
               type: "EDIT_ELEMENT"
           });
           alert("Elemento cambiado")
        } catch (error) {
            alert(error);
        }
    }
}

export function newMovie(input){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/movies", input);
           dispatch({
               type: "POST_ELEMENT"
           });
           alert("Elemento cambiado")
        } catch (error) {
            alert(error);
        }
    }
}