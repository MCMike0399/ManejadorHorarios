import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyparser from "body-parser";
import UsuarioRoute from "./routes/UsuarioRoute";

const app = express();
app.use(morgan("dev")); // monitorear los request a nuestro servidor
app.use(cors()); // que no cualquiera pueda hacer request
app.use(helmet()); // encripta los headers de nuestro servidor para seguridad
app.use(bodyparser.json()); // parsee correctamente nuestros json
app.use(bodyparser.urlencoded({ extended: true })); // encripta los urls de request y response

app.use("/api/usuario", UsuarioRoute);

app.get("/", (req, res) => {
   res.send("Hola Mundo");
});

export default app;
