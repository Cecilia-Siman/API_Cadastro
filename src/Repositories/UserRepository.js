import { prisma } from "../Config/database.js";

class UserRepository {
  async insertUser(userInfo) {
    await prisma.users.create({
      data: userInfo,
    });
  }

  async findUser(cpf) {
    const userData = await prisma.users.findUnique({
      where: {
        cpf,
      },
    });
    return userData;
  }

  async listAllUsers(take, skip) {
    await prisma.users.findMany({
      take,
      skip,
    });
  }
}

export default new UserRepository();
