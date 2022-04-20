import React, { useMemo, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Detail from './Componentes/Detail/Detail'
import LoginUser from './Componentes/Login/LoginUser';
import RegUsuarios from './Componentes/RegUsuarios/regUsuarios';
import { useDispatch } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme-config';
import Perfil from './Componentes/Perfil/Perfil';
import { useSelector } from 'react-redux';
import { loginFillState } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userInfo);

  const isLogged = useMemo(() => {
    if(user === null) return false;
    if(user !== null) return true;
  });

  useEffect(() => {
    dispatch(loginFillState());
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>

            <Route exact path = '/' element={(isLogged === false) ? <Landing/> : <Navigate to="/home"/>} />

            <Route path = '/home' element={(isLogged === true) ? <Home/> : <Navigate to="/login"/>} />

            <Route path = '/:id' element={(isLogged === true) ? <Detail/> : <Navigate to="/login"/>} />

            <Route path = '/login' element={(isLogged === false) ? <LoginUser/> : <Navigate to="/home"/>} />

            <Route path = '/register' element={(isLogged === false) ? <RegUsuarios/> : <Navigate to="/home"/>} />

            <Route path='/perfil' element={<Perfil/>} />
            
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
