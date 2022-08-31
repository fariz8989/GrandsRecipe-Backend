const express = require("express");
const router = express.Router();
const restrict = require("../midware/restrict");
const postController = require('../controller/postController');
const multer =require('../midware/multer')
router.all("/create",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );  
  res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");
  next();
})
router.all("/",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );  
  res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");
  next();
})
router.put('/create',restrict,multer, postController.create)
router.get('/', postController.get)
module.exports=router;