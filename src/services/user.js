const pool = require("../utils/db");
const adpter = require("../utils/adpter");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const userMap = {
  user_id: "userId",
  user_name: "name",
  user_desc: "desc",
  user_password: "password",
  user_role: "role",
};
module.exports = (app) => {
  class User {
    async getAllUsers() {
      const res = await prisma.user.findMany();
      const data = adpter(res, userMap, []);
      return data;
    }
  }
  return User;
};
