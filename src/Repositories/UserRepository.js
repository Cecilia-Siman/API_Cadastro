import { prisma } from "../Config/database";

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

  async listUsers(take, skip) {
    await prisma.users.findMany({
      take,
      skip,
    });
  }
}

export default new UserRepository();
