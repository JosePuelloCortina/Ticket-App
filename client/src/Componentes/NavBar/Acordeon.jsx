import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import SelectDate from '../Date/SelectDate';

const useStyles = makeStyles((theme) => ({
  root: {
      minWidth:'345px',
      width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16), 
    fontWeight: theme.typography.fontWeightRegular,
  },
  AccStyleBtn:{
      width: '345px',
      margin: '6px',
      borderRadius: '8px',
      border: '1px solid #e3e3e3',
      boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',
  },
  formControl:{
      width: '100%',
  },
  cont_body:{
    width:'100%', 
    borderTop:'1px solid #eee',
    padding:'14px 16px 16px 16px',
    display:'block', 
    boxSizing:'border-box',
  },
  styleDiv:{
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1em',
    fontWeight: 300,
    marginBottom: '10px',
    padding:0,
    margin:0,
    boxSizing: 'border-box',
  },
  styleUl:{
    margin:0,
    padding:0,
    display: 'block',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    listStyle: 'none',
  },
  stlyleLi:{
    display: 'inline-flex',
    border: '1px solid #9e9e9e',
    borderRadius: '14px',
    padding: '4px 12px',
    fontSize: '0.9em',
    marginRight: '6px',
    marginTop: '8px',
    cursor: 'pointer',
  },
  selectedGenero:{
    backgroundColor: 'rgba(1,180,228, 1)',
    color: '#fff',
    borderColor: 'rgba(1,180,228, 1)',
  },
  noSelected:{
    background: 'transparent',
    color: '#000',
  }
}));

export default function SimpleAccordion({handleOrder, arrGeneros}) {
  const classes = useStyles();
  const [value, setValue] = useState('Selecciona');

  const handleChangeSelect = (e)=>{
    setValue(e.target.value);
    if(e.target.value === 'tituloAZ') handleOrder('nombre', true);
    else if(e.target.value === 'tituloZA') handleOrder('nombre', false);
    else if(e.target.value === 'estrenoAZ') handleOrder('fecha', true);
    else if(e.target.value === 'estrenoZA') handleOrder('fecha', false);
  };

  const handleClicGenero = (id_gen)=>{
    console.log('clic boton ', id_gen);
  };

  return (
    <div className={classes.root}>
      <Accordion className={classes.AccStyleBtn}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><b>Ordenar</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.cont_body}>
            <span style={{fontSize:16}}>Ordenar resultados por:</span>
            <div style={{width:'100%'}}>
              <FormControl className={classes.formControl} size={`small`}>
                <Select id="demo-simple-select"
                  variant='filled'
                  value={value}
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={`Selecciona`} selected>Selecciona</MenuItem>
                  <MenuItem value={`tituloAZ`}>Título (A-Z)</MenuItem>
                  <MenuItem value={`tituloZA`}>Título (Z-A)</MenuItem>
                  <MenuItem value={`estrenoAZ`}>Fecha de estreno ascdente</MenuItem>
                  <MenuItem value={`estrenoZA`}>Fecha de estreno descendente</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccStyleBtn}>
        <AccordionSummary expandIcon={<ExpandMore/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><b>Filtros</b></Typography>
        </AccordionSummary>
        <AccordionDetails style={{display:'flex', flexDirection: 'column'}}>
          <div className={classes.cont_body}>
            <span className={classes.styleDiv}>Buscar por fecha de estreno</span>
            <div style={{margin:'1rem 0rem'}}>
              <SelectDate etiqueta={`Desde`} />
            </div>
            <div style={{margin:'1rem 0rem'}}>
              <SelectDate etiqueta={`Hasta`} />
            </div>
            <Button variant='contained' color='primary' disableElevation>Buscar en Rango</Button>
          </div>
          <div className={classes.cont_body}>
            <span className={classes.styleDiv}>Géneros</span>
            <ul className={classes.styleUl}>
              {arrGeneros?.map((g)=>{
                return(<li key={g.id} className={classes.stlyleLi} id={g.id}
                    onClick={()=>handleClicGenero(g.id)}
                    >
                    {g.nombre}
                  </li>)
              })}
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.AccStyleBtn}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}><b>Dónde se puede ver</b></Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}