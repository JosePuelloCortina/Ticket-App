import { CardMedia, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import uno from '../Image/uno.jpg'

const useStyles = makeStyles({
    left:{
        backgroundColor: '#22272E',
        display: 'flex',
        width: '50%',
        flexGrow: 1,
        position: 'relative',
        zIndex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
      },
      wrapper:{
        display: 'flex',
        justifyContent: 'center',
        overFlow: 'hidden',
        boxSizing: 'border-box',
      },
      card:{
        borderRadius: '16px',
        width: '427px',
        height: '312px',
        background: '#444C56',
        position: 'relative',
        marginTop: '6.2rem',
        boxSizing: 'border-box',
        display: 'block',
      },
      map:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '6px',
        boxSizing: 'border-box',
        fontSize: '14px',
      },
      circle:{
        marginRight: '6px',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        margin: '6px',
        backgroundColor: 'rgba(117, 117, 117, 1)',
        boxSizing: 'border-box',
        fontStyle: 'italic',
      },
      circleSelected:{
        marginRight: '6px',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        margin: '6px',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        boxSizing: 'border-box',
        fontStyle: 'italic',
      },
      formatImg:{
        objectFit: 'contain',
        backgroundColor: '#373E47',
      },
})

function Transition() {
    const classes = useStyles();
    return (
        <div className={classes.left}>
            <div className={classes.wrapper}>
            <Container className={classes.card}>
                <CardMedia className={classes.formatImg}
                component={`img`}
                image={uno}
                title={`original_title`}
            />
            </Container>
            </div>
            <Container className={classes.map}>
            <i className={classes.circleSelected} ></i>
            <i className={classes.circle} ></i>
            <i className={classes.circle} ></i>
            </Container>
        </div>
    )
}

export default Transition