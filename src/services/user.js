const pool = require("../utils/db");
const adpter = require('../utils/adpter');

const userMap = {
  user_id: 'userId',
  user_name: 'name',
  user_desc: 'desc',
  user_password: 'password',
  user_role: 'role',
};
module.exports = (app) => {
  class User {
    async getAllUsers() {
      const res = await pool.query(`SELECT * FROM "user"`);
      const data = adpter(res.rows, userMap, []);
      return data;
    }
  }
  return User;
};
