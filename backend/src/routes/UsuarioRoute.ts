import { Router } from "express";
import { registroHandler } from "../controllers/UsuarioController";

const router = Router();

router.post("/registro", registroHandler);

export default router;