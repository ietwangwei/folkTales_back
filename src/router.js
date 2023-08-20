'use strict';

module.exports = app => {
  app.get('/user', app.controller.user.getAllUsers);
};