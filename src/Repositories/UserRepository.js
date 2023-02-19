import { prisma } from "../Config/database.js";

class UserRepository {
  async insertUser(userInfo) {
    await prisma.users.create({
      data: userInfo,
    });
  }

  async findUser(cpf) {
    await prisma.users.findUnique({
      where: {
        cpf,
      },
    });
  }

  async listAllUsers(take, skip) {
    await prisma.users.findMany({
      take,
      skip,
    });
  }
}

export default new UserRepository();
