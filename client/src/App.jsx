import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Detail from './Componentes/Detail/Detail'
import LoginUser from './Componentes/Login/LoginUser';
import RegUsuarios from './Componentes/RegUsuarios/regUsuarios';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme-config';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<Landing />} />
            <Route path = '/home' element={<Home />} />
            <Route path = '/:id' element={<Detail />} />
            <Route path = '/login' element={<LoginUser />} />
            <Route path = '/register' element={<RegUsuarios />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
