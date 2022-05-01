import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Button, CssBaseline, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme)=>({
    appbar:{
        background: 'none',
    },
    appbarTitle:{
        flexGrow:1,
        color: '#fff'
    },
    appbarBtn:{
        marginLeft: '10px',
    },
    appbarWraper:{
        width:'80%',
        margin: '0 auto',
    },
    colorText:{
        color: '#5ED5A8'
    }
}));

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function NavBarLanding(props){
    const classes = useStyles();
    return <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWraper}>
                    <h2 className={classes.appbarTitle}>
                        Cinem<span className={classes.colorText}>App</span>
                    </h2>
                    <Link to='/login' style={{'textDecoration':'none'}}>
                        <Button className={classes.appbarBtn} variant='contained' color='primary' disableElevation>
                            Iniciar Sesión
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    </React.Fragment>
}