import app from "./app";
import { config } from "dotenv";
config();

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
   console.log("Escuchando en el puerto", PORT);
});
