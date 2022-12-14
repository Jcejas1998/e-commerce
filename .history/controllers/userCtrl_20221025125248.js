const Users = require("../models/useModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await Users.findOne({ email });
      if (user) return res.status(400).json({ msg: "el email ya existe" });
      if (password.length < 6)
        return res.status(400).json({ msg: "contraseña muy corta" });

      //password encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });
      //save mongodb

      await newUser.save();

      //then create jsonwebtoken to authentication
      const accestoken = createAcessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookies("resfreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

          res.json({accestoken})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login:async(req,res)=>{
    try {
        const {email, password}= req.body;
        const user = await Users.findOne({email})
        if(!user) return res.status(400).json({msg: "User does not exist."})
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: "incorrect password."})

        //if login sucess, create acess webtoken and refresh token
        res.json({msg:"Login sucess!"})
    } catch (error) {
      return res.status(500).json({ msg: err.message });
        
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "please login or register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "please login or register" });
        const accestoken = createAcessToken({ id: user.id });
        // res.json({user, accestoken})
        res.json({ accestoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAcessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = userCtrl;
