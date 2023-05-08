const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


exports.authMiddleware = async (req, res, next) => {
 
  
    try {
      const token = req.header('Authorization')
      if (token) {
        const decoded = jwt.verify(token, process.env.Private_key);
        console.log(decoded);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }else {
        res.send('no token ')
      }
    } catch (error) {
      throw new Error("Please Login again");
    }
  } 


