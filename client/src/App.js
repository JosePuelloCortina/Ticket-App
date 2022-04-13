import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Detail from './Componentes/Detail/Detail'
//import LoginUser from './Componentes/Login/LoginUser';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<Landing />} />
            <Route path = '/home' element={<Home />} />
            <Route path = '/detail' element={<Detail />} />
            {/* <Route path = '/login' element={<LoginUser />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
