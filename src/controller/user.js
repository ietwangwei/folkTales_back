"use strict";

module.exports = (app) => {
  class UserController {
    async getAllUsers(req, res) {
      const result = await app.service.user.getAllUsers();
      res.send(JSON.stringify(result));
    }

    async login(req, res) {
      const result = await app.service.user.login();
      res.send(result);
    }
  }

  return UserController;
};
