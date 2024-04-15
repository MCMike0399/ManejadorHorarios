import { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import axios, { AxiosError } from "axios";

/* 
1)
   los textfields deben tener su tipo, ej: textfield email acepte solamente emails, 
   textfield passw sea tipo password (no se vea la contraseña a pleno mundo)
   HINT: es un prop de Textfield
2) Agregar un nuevo textfield llamado confirmPassw, en donde revise que passw y confirmPassw coincidan, si no
   coinciden mandar un error en Swal y no hacer la petición al backend
   AYUDA: 
   Swal.fire({
      icon: "error",
      title: "Error",
      text: "las contraseñas no son las mismas",
      showConfirmButton: true
   })
   return;
   COSAS RARAS DE JS: usa ==== para comparar variables (no uses ==)
*/

export default function Registro() {
   const [userName, setUserName] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [nombre, setNombre] = useState<string>("");
   const [passw, setPassw] = useState<string>("");

   async function registrarUsuario() {
      try {
         Swal.showLoading();
         await axios.post("http://localhost:8080/api/usuario/registro", {
            userName,
            email,
            nombre,
            passw,
         });
         Swal.fire({
            icon: "success",
            title: "Registro Correcto",
            text: "tu usuario se ha registrado correcamente",
         });
      } catch (error) {
         console.log(error);
         Swal.fire({
            icon: "error",
            title: "Error",
            text:
               error instanceof AxiosError
                  ? error.response?.data.msg
                  : "Hubo un error desconocido al registrar el usuario",
            showConfirmButton: true,
         });
      }
   }

   return (
      <Grid>
         <TextField
            label="UserName" // esto es un ejemplo de un prop
            value={userName} // esto es un ejemplo de otro prop
            onChange={(event) => setUserName(event.target.value)}
            // AQUI VA EL HINT
         />
         <TextField label="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
         <TextField
            label="Nombre Completo"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
         />
         <TextField
            label="Contraseña"
            value={passw}
            onChange={(event) => setPassw(event.target.value)}
         />
         <Button onClick={registrarUsuario} variant="outlined">
            Registrarte
         </Button>
      </Grid>
   );
}
