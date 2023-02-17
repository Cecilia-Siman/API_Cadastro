import UserService from "../Services/UserService";

class UserController {
  async insertUserController(req, res) {
    const { name, cpf, birthday } = req.body;
    await UserService.insertUser(name, cpf, birthday);
    res.sendStatus(201);
  }
  async findeUserController(req, res) {
    const { cpf } = req.body;
    const user = await UserService.findUser(cpf);
    res.send(user).status(200);
  }
  async listUsersController(req, res) {
    const { take, skip } = req.query;
    const list = await UserService.listAllUsers(take, skip);
    res.send(list).status(200);
  }
}

export default new UserController();
