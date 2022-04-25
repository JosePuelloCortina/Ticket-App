import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const herokuUrl = 'https://ticket-app-cine.herokuapp.com';

axios.defaults.baseURL = process.env.REACT_APP_API || herokuUrl;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
