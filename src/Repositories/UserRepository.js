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
    const list = await prisma.users.findMany({
      take: Number(take),
      skip: Number(skip),
    });
    console.log(list);
    return list;
  }
}

export default new UserRepository();
