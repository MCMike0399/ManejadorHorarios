/*
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
*/

import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../utils/bcryptUtils";

const prisma = new PrismaClient();

export async function registro(userName: string, email: string, nombre: string, passw: string) {
   // Hashea la contraseña antes de almacenarla en la base de datos
   const hashedPassword = await hashPassword(passw);

   if (!hashedPassword) {
      throw new Error("Error al guardar la contraseña");
   }

   // Crea un nuevo usuario en la base de datos con prisma client
   const nuevoUsuario = await prisma.usuario.create({
      data: {
         userName,
         email,
         nombre,
         passw: hashedPassword,
      },
   });
   if (!nuevoUsuario) {
      throw new Error("Usuario no fue creado");
   }
   return nuevoUsuario;
}
