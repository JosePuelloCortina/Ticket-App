import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField } from "@material-ui/core";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tgu1b6o",
        "template_jld56xc",
        form.current,
        "WzGOKWM4QMTuo_ALk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
   };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div style={{display:'flex', gap:10, padding:10, backgroundColor:'#f3f3f3', borderRadius:'6px 6px 0px 0px'}}>  
      <TextField 
        label="Nombre"
        variant="outlined"
        size="small"
        type="text" 
        name="user_name"
      />
      <TextField 
        label="Dirección email"
        variant="outlined"
        size="small"
        type="email"
        name="user_email"
        // sx={{width:'auto'}}
      />
      </div>
      <div style={{backgroundColor:'#f3f3f3', padding:'0px 10px 10px 10px', borderRadius:'0px 0px 6px 6px'}}>
        <TextField 
          label="Mensaje"
          variant="outlined"
          size="small"
          multiline
          fullWidth
          minRows={4}
          name="message"
        />
      <input type="submit" value="Enviar" style={{display:'flex', alignItems:'center', marginTop:10}} />
      </div>
    </form>
  );
};
