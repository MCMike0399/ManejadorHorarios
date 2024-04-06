import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function registro(userName: string, email: string, nombre: string, passw: string) {
   // Crea un nuevo usuario en la base de datos con prisma client
   const nuevoUsuario = prisma.usuario.create({
      data: {
         userName, // userName: userName
         email, // email: email
         nombre, // nombre: nombre
         passw, // passw: passw
      },
   });
   if (!nuevoUsuario) {
      throw new Error("Usuario no fue creado");
   }
   return nuevoUsuario
}
