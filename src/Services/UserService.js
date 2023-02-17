import UserRepository from "../Repositories/UserRepository";
import CpfValidatorService from "./CpfValidatorService";

class UserService extends CpfValidatorService {
  async insertUser(name, cpf, birthday) {
    this.validateCpf(cpf);
    let date = birthday.replace("/", "-");
    let dateArray = date.split("-");
    let formatedBirthday =
      dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];
    await UserRepository.insertUser(name, cpf, formatedBirthday);
  }
  async findUser(cpf) {
    this.validateCpf(cpf);
    const userData = await UserRepository.findUser(cpf);
    return userData;
  }
  async listAllUsers(take, skip) {
    const listUsers = await UserRepository.listAllUsers(take, skip);
    return listUsers;
  }
}

export default new UserService();
