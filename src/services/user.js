module.exports = app => {
  class User {
    async getAllUsers() {
      const res = app.db.select('*').from('user').queryValue()
    }
  }
  return User;
};