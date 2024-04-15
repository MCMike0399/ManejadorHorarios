import { hash, compare } from "bcrypt";
export async function hashPassword(passw: string): Promise<string> {
   const newPassw = await hash(passw, 6);
   return newPassw;
}