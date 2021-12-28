import { Router } from "express";
import { CreateUsuarioController } from "./controllers/CreateUsuarioController";

const router = Router();

const createUsuarioController = new CreateUsuarioController();

router.post("/cadClient", createUsuarioController.handle);

export {router};