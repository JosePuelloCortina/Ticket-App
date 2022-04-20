import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from './components/Home/home';
import Usuarios from './components/Users/user';
import Admins from './components/Admins/admins';
import Categorias from './components/Categorias/categorias';
import Peliculas from './components/Peliculas/peliculas';
import UserDetail from './components/Details/userDetail';

function App() {

  //<Route path='/' element={</>}/>
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/users' element={<Usuarios/>}/>
        <Route path='/admins' element={<Admins/>}/>
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/user/:id' element={<UserDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
