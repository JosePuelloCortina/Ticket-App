import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from './components/Home/home';
import Usuarios from './components/Users/user';
import Admins from './components/Admins/admins';
import Categorias from './components/Categorias/categorias';
import Peliculas from './components/Peliculas/peliculas';
import UserDetail from './components/Users/userDetail';
import AdminDetail from './components/Admins/adminDetail';
import MovieDetail from './components/Peliculas/MovieDetail';
import CategoriaDetail from './components/Categorias/categoryDetail';
import AddMovie from './components/Peliculas/AddMovie';
import AddCategoria from './components/Categorias/AddCategoria';

function App() {

  //<Route path='/' element={</>}/>
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/users' element={<Usuarios/>}/>
        <Route path='/user/:id' element={<UserDetail/>}/>

        <Route path='/admins' element={<Admins/>}/>
        <Route path='/admin/:id' element={<AdminDetail/>}/>
        
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/movies/:id' element={<MovieDetail/>}/>
        <Route path='/movies/add' element={<AddMovie/>}/>

        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/categoria/:id' element={<CategoriaDetail/>}/>
        <Route path='/categoria/add' element={<AddCategoria/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
