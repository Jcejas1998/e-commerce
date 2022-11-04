const Users = require("../models/useModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req,res)=>{
    try {
      const {name,email,password}=req.body;

      const user = await Users.findOne({email})
      if(user) return res.status(400).json({msg: "el email ya existe"})

      if(password<6)
        return res.status(400).json({msg: "contraseña muy corta"})
    } catch (err) {
      return res.status(500).json({msg: err.message})
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
