import { Request, Response } from "express";
import { registro } from "../services/UsuarioService";

/* 
req.body = {
   userName: string,
   email: string,
   nombre: string
   passw: string
}
*/

export async function registroHandler(req: Request, res: Response) {
   // Recibimos el payload de nuestra base de datos
   const { userName, email, nombre, passw } = req.body;
   if (
      typeof userName !== "string" ||
      typeof email !== "string" ||
      typeof nombre !== "string" ||
      typeof passw !== "string"
   ) {
      // si no se cumple con nuestras reglas, mandamos un bad request
      return res.status(400).json({
         msg: "Bad Request",
         success: false,
      });
   }
   try {
      // Creamos un usuario nuevo en la bd
      const nuevoUsuario = await registro(userName, email, nombre, passw);
      // se creó el usuario exitosamente y lo regresamos al cliente
      return res.status(201).json({
         msg: "Usuario Creado!",
         success: true,
         responseData: {
            userName: nuevoUsuario.userName,
            email: nuevoUsuario.email,
            nombre: nuevoUsuario.nombre,
         },
      });
   } catch (error) {
      // si hubo un error en el query, mandamos el mensaje de error
      return res.status(500).json({
         msg: error instanceof Error ? error.message : "Error Desconocido",
         success: false,
      });
   }
}
