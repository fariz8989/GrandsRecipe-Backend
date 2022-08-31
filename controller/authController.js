const restrict = require("../midware/restrict");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
let encrypt = (password) => bcrypt.hashSync(password, 10);
module.exports={
    login: async (req, res, next) => {
        const password = req.body.password
        const username = req.body.username
      try{
        const user = await User.findOne({where:{username:username}})
        generateToken = () =>{
            const payload ={
              id: user.id,
              username:user.username
            }
            const code = 'token'
            const token =jwt.sign(payload,code)
            return token
          }
        if(!user){
         return res.status(404).json({
            result:"Failed",
            message:"Username Tidak Ditemukan"
          })
        }
        const validatePassword = bcrypt.compareSync(password,user.password);
        if (!validatePassword){
          res.status(400).json({
            result:"Failed",
            message:"Wrong Password"
          })
         
        }else{
         return res.status(200).json({
            result:"Success",
            data:{
              username:user.username,
              password:user.password,
              accessToken:generateToken()
            }
          })
         
        }
      }
      catch(err){
        console.log(err)
    return res.status(400).json({
        result:"Failed",
        message:err.message
      })
      } 
      },
      register: async (req, res, next) => {
  
        const password = await encrypt(req.body.password);
        const username = req.body.username;
        try {
          const exist = await User.findOne({ where: { username } });
          if (exist) {
            return res.status(401).json({
              result: "Failed",
              message: "Username Tidak Tersedia",
            });
          }
        } catch (err) {
          return res.status(500).json({
            result: "Failed",
            message: err.message,
          });
        }
        try {
          User.create({ username, password }).then((result) => {
            return res.send(result);
          });
        } catch (err) {
          return res.status(400).json({
            result: "Failed",
            message: err.message,
          });
        }
      }
}