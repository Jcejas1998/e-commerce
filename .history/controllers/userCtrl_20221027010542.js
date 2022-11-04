const Users = require("../models/useModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




// const createAcessToken = (user) => {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
// };
// const createRefreshToken = (user) => {
//   return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
// };

module.exports = userCtrl;
