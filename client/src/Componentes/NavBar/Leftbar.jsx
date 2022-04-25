import React from 'react'
import { Divider, Drawer, IconButton, Typography, useTheme, ListSubheader, List } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { styled } from '@material-ui/styles';
import Acordeon from './Acordeon';

const drawerWidth = 360;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  alignContent: 'start',
}));

const Leftbar = ({open, handleDrawerClose, handleOrder, arrGeneros}) => {
  const theme = useTheme();
  return (
    <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth}}}
        variant="persistent"
        anchor="left"
        open={open}
    >
      <DrawerHeader style={{width:'360px', backgroundColor:'#f3f3f3'}} >
        <Typography variant="h6" noWrap style={{marginLeft:'2.5rem', marginRight:'2.5rem', width:'100%', textAlign:'center'}}>
          <b>Cinem</b><span style={{'color':'#5ED5A8'}}><b>App</b></span>
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ width: '100%', maxWidth: '300px', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
        <ListSubheader component="div" id="nested-list-subheader" >
            Ecuentra más fácil tus películas
        </ListSubheader>
        }
      >
        <Acordeon handleOrder={handleOrder} arrGeneros={arrGeneros} />
      </List>
    </Drawer>
  )
}

export default Leftbar