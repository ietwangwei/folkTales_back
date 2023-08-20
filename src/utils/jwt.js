const expressJwt = require("express-jwt");
const { secretKey } = require("./token");

const jwtAuth = expressJwt({ secret: secretKey }).unless({
  path: ["/api/login"],
});

module.exports = jwtAuth;
