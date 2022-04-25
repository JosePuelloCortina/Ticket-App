import React, { useState } from 'react'
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import Leftbar from '../NavBar/Leftbar';
import Paginacion from '../Paginacion/Paginacion';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { moviesSort } from '../../redux/actions';

const drawerWidth = 360;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    }),
}),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  export default function Home() {
    const dispatch = useDispatch();
    const filteres = useSelector((state) => state.filtered);
    const movies = useSelector((state) => state.movies.data);
    const generos = useSelector((state)=> state.genres.data);

    const arrMovies = filteres.length > 0 ? filteres : movies;
    
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleOrder = (propiedad, order) =>{
        dispatch(moviesSort([...arrMovies], propiedad, order));
    }

  return (
    <div style={{display:'flex'}}>
        <CssBaseline/>
        <NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
        <Leftbar variant='permanent' open={open} 
            handleDrawerClose={handleDrawerClose} 
            handleOrder={handleOrder}
            arrGeneros={generos} />
        <Main open={open} >
            <DrawerHeader/>
            <Cards />
            {/* <Paginacion /> */}
        </Main>
    </div>
  )
}
