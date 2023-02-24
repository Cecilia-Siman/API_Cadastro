import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import schemaValidator from "../Middlewares/schemaValidator.js";
import userSchema from "../Schemas/userSchema.js";

const router = Router();

router.post(
  "/newClient",
  schemaValidator.validateSchema(userSchema),
  UserController.insertUserController
);
router.get("/findClient/:cpf", UserController.findeUserController);
router.get("/listClients", UserController.listUsersController);

export default router;
