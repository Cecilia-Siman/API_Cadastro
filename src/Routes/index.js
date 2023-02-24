import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import schemaValidator from "../Middlewares/schemaValidator.js";
import userSchema from "../Schemas/userSchema.js";
import cpfSchema from "../Schemas/cpfSchema.js";
const router = Router();

router.post(
  "/newClient",
  schemaValidator.validateBodySchema(userSchema),
  UserController.insertUserController
);
router.get(
  "/findClient/:cpf",
  schemaValidator.validateParamsSchema(cpfSchema),
  UserController.findeUserController
);
router.get("/listClients", UserController.listUsersController);

export default router;
