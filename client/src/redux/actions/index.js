import axios from "axios";
const herokuUrl = "https://ticket-app-cine.herokuapp.com";

export function getuserDetails(id) {
  return async function (dispach) {
    try {
      const detail = await axios.get(`${herokuUrl}/user/${id}`);

      dispach({
        type: "GET_USER_DETAILS",
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function logout() {
  return async function (dispatch) {
    try {
      window.localStorage.removeItem("userLogged");
      return dispatch({
        type: "USER_LOGOUT",
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function login(email, password) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `${herokuUrl}/user/login?email=${email}&&password=${password}`
      );
      window.localStorage.setItem("userLogged", JSON.stringify(json.data));
      return dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: json.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function loginGoogle(user) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`${herokuUrl}/user/googlelogin`, user);
      window.localStorage.setItem("userLogged", JSON.stringify(json.data));
      return dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginFillState() {
  return async function (dispatch) {
    try {
      const user = window.localStorage.getItem("userLogged");
      const json = JSON.parse(user);
      return dispatch({
        type: "LOGIN_FILL_STATE",
        payload: json,
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function postUser(payload) {
  //console.log(payload)
  return async function (dispatch) {
    try {
      const create = await axios.post(`${herokuUrl}/user`, payload);
      return dispatch({
        type: "POST_USER",
        payload: create,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function moviesDetail(id) {
  return async function (dispach) {
    try {
      const detail = await axios.get(`${herokuUrl}/movies/id/${id}`);
      console.log(detail);
      return dispach({
        type: "MOVIES_DETAIL",
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const allMovies = () => async (dispach) => {
  try {
    const movies = await fetch(`${herokuUrl}/movies`);
    const data = await movies.json();
    dispach({
      type: "ALL_MOVIES",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const allGeners = () => async (dispach) => {
  try {
    const geners = await fetch(`http://localhost:3001/categories`);
    const data = await geners.json();
    dispach({
      type: "ALL_MOVIE_GENRES",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export function moviesByName(name) {
  return async function (dispatch) {
    try {
      const movies = await axios.get(`${herokuUrl}/movies/name/${name}`);
      return dispatch({
        type: "MOVIES_NAME",
        payload: movies.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function moviesSort(movies, propiedad, order) {
  // console.log(movies);
  const movieSort = movies.sort((a, b) => {
    let A = a[propiedad];
    let B = b[propiedad];
    if (propiedad === "nombre" || propiedad === "fecha") {
      A = a[propiedad].toLowerCase().trim();
      B = b[propiedad].toLowerCase().trim();
    }
    if (order) return A > B ? 1 : A < B ? -1 : 0;
    else return A < B ? 1 : A > B ? -1 : 0;
  });
  return { type: "MOVIES_FILTERED", payload: movieSort };
}
