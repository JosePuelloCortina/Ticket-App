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
                type: "GET_USERS",
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
                type: "GET_USER_DETAIL",
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
               type: "GET_ADMINS",
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
                type: "GET_ADMIN_DETAIL",
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
               type: "GET_MOVIES",
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
                type: "GET_MOVIE_DETAIL",
                payload: json.data.data
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
            await axios.put(`http://localhost:3001/movies?id=${id}`, edit);
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
           alert("Elemento guardado")
        } catch (error) {
            alert(error);
        }
    }
}

export function getCategories(){
    return async function(dispatch){
        try {
            const json = await axios.get("http://localhost:3001/categories");
           dispatch({
               type: "GET_CATEGORIES",
               payload: json.data.data
           });
        } catch (error) {
            alert(error);
        }
    }
}

export function newCategorie(input){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/categories", input);
           dispatch({
               type: "POST_ELEMENT"
           });
           alert("Elemento guardado")
        } catch (error) {
            alert(error);
        }
    }
}

export function makeAdmin(input){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/admin", input);
           dispatch({
               type: "POST_ELEMENT"
           });
           alert("Elemento guardado")
        } catch (error) {
            alert(error);
        }
    }
}

export function login(email, password){
    return async function(dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/admin?email=${email}&&password=${password}`);
            window.localStorage.setItem("admin", JSON.stringify(json.data));
           dispatch({
               type: "LOGIN_ADMIN",
               payload: json.data
           });
           alert("Logeado exitosamente!");
        } catch (error) {
            alert(error);
        }
    }
}


export function fillUserAdmin(){
    return async function(dispatch){
        try {
            const admin = window.localStorage.getItem("admin");
            const json = JSON.parse(admin);
            dispatch({
                type: "LOGIN_ADMIN",
                payload: json
            })
        } catch (error) {
            alert(error)
        }
    }
}

export function logOut(){
    return async function(dispatch){
        try {
            window.localStorage.removeItem("admin");
            dispatch({
                type: "LOG_OUT",
            })
        } catch (error) {
            alert(error)
        }
    }
}