import { Router } from "express";
import UserController from "../Controllers/UserController.js";

const router = Router();

router.post("/newClient", UserController.insertUserController);
router.get("/findClient/:cpf", UserController.findeUserController);
router.get("/listClients/?take?skip", UserController.listUsersController);

export default router;
