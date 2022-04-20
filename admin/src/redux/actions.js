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
