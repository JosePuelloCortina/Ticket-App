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
import AddMovie from './components/Peliculas/AddMovie';
import AddCategoria from './components/Categorias/AddCategoria';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { fillUserAdmin } from './redux/actions';
import AddTickets from './components/addTickets';
import Ventas from './components/Ventas';
import Sucursales from './components/Sucursales/sucursales';
import AddSucursal from './components/Sucursales/addSucursal';

function App() {

  const dispatch = useDispatch();

  const admin = useSelector(state => state.adminInfo);

  const isLogged = useMemo(() => {
    if(admin === null) return false;
    if(admin !== null) return true;
  });

  useEffect(() => {
    dispatch(fillUserAdmin());
  }, [])

  //<Route path='/' element={</>}/>
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={(isLogged === false) ? <Login/> : <Navigate to="/home"/>}/>

        <Route path='/home' element={(isLogged === true) ? <Home/> : <Navigate to="/"/>}/>
        <Route path='/users' element={(isLogged === true) ? <Usuarios/> : <Navigate to="/"/>}/>
        <Route path='/user/:id' element={(isLogged === true) ? <UserDetail/> : <Navigate to="/"/>}/>

        <Route path='/admins' element={(isLogged === true ) ? <Admins/> : <Navigate to="/"/>}/>
        <Route path='/admin/:id' element={(isLogged === true) ? <AdminDetail/> : <Navigate to="/"/>}/>
        
        <Route path='/peliculas' element={(isLogged === true) ? <Peliculas/> : <Navigate to="/"/>}/>
        <Route path='/movies/:id' element={(isLogged === true) ? <MovieDetail/> : <Navigate to="/"/>}/>
        <Route path='/movies/add' element={(isLogged === true) ? <AddMovie/> : <Navigate to="/"/>}/>

        <Route path='/categorias' element={(isLogged === true) ? <Categorias/> : <Navigate to="/"/>}/>
        <Route path='/categoria/add' element={(isLogged === true) ? <AddCategoria/> : <Navigate to="/"/>}/>

        <Route path='/addTickets' element={(isLogged === true) ? <AddTickets/> : <Navigate to="/"/>}/>

        <Route path='/ventas' element={(isLogged === true) ? <Ventas/> : <Navigate to="/"/>}/>

        <Route path='/sucursales' element={<Sucursales/>}/>
        <Route path='/addSucursal' element={<AddSucursal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
