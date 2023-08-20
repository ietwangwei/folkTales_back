'use strict';

module.exports = app => {
  app.get('/api/user', app.controller.user.getAllUsers);
};