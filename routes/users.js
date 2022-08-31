const express = require("express");
const router = express.Router();
const restrict = require("../midware/restrict");

const authController = require('../controller/authController')

router.all("/login",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With,Content-Type,Authorization"
    );  
    res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");
    next();
})
router.all("/register",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );  
  res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");
  next();
})
/* GET users listing. */

//Register


router.post("/login",authController.login);

router.post("/register", authController.register);
router.get("/login",restrict,(req,res,next)=>{
 
  return res.status(201).json({
    username:req.user.dataValues.username,
    isLoggedIn : true
 })
})
module.exports = router;
