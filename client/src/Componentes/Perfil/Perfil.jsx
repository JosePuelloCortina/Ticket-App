import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getuserDetails, getTickets } from "../../redux/actions/index";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContactUs }  from "../ContactForm/ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#22272E",
    borderRadius: 6,
    padding: 20,
    gap:10,
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
}));
const Perfil = () => {
  const user = useSelector((state) => state.userInfo);
  const tickets = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const { id } = useParams;

  useEffect(() => {
    dispatch(getuserDetails(id));
    dispatch(getTickets(id));
  }, [dispatch, id]);

  console.log(user);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <section style={{display:'flex', flexDirection:'row', border:'1px solid gray', padding:20, borderRadius:6}}>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:10}}>
            <img
              className={classes.image}
              src={user?.imagen || "https://img2.freepng.es/20180612/ih/kisspng-computer-icons-avatar-user-profile-clip-art-5b1f69f0e68650.4078880515287853929442.jpg"}
              alt=""
            />
            <Typography component="h5" variant="h5" color="primary">
              {user?.nombre} <span style={{color:'gray'}}>{user?.apellido}</span>
            </Typography>
            <Typography component="h5" variant="subtitle1" color="secondary">
              {user?.email}
            </Typography>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:10, marginLeft:20}}>
            <Typography component="h4" color="primary">
              Contactanos para cualquier consulta
            </Typography>
            <div>
              <ContactUs />
            </div>
          </div>
        </section>
        <section style={{padding:20, border:'1px solid gray', borderRadius:6}}>
          <Typography component="h4" color="primary">
            Tickets comprados
          </Typography>
          <Divider style={{backgroundColor:'gray', margin:'10px 0px'}}/>
          <Grid container spacing={1}>          
            {user?.tickets?.map((tiket, ind) => {
              return (
                <React.Fragment key={tiket.id}>
                  <Grid item xs={12} sm={4}>
                    <Typography component="h4" color="primary">
                      {tiket.numero}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography component="h4" color="primary">
                      {tiket.numero_sala}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography component="h4" color="primary">
                      {tiket.fecha_hora}
                    </Typography>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </section>
        <div style={{display:'flex', justifyContent:'center'}}>
          <Link to="/home" style={{textDecoration:'none', color:'inherit'}}>
            <Button variant="contained" color="secondary">volver</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
