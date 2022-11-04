const Users = require("../models/useModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req,res)=>{
    try {
      const {name,email,password}=req.body;
      
    } catch (err) {
      
    }
  }
}


// const createAcessToken = (user) => {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
// };
// const createRefreshToken = (user) => {
//   return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
// };

module.exports = userCtrl;
