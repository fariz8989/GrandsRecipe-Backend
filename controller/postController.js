const { Post } = require("../models");
const Imagekit = require("imagekit");
const public_key = process.env.PUBLICKEY;
const private_key = process.env.PRIVATEKEY;
const urlEndPoint = process.env.URLENDPOINT;
const ImageKit = require("imagekit");
module.exports = {
  create: async (req, res, next) => {
    try {
      const file = req.file;
      console.log(file);
      const userId = req.user.id;
      const author = req.user.username;
      const steps = req.body.steps.split(",");
      const ingredients = req.body.ingredients.split(",");
      const tags = req.body.tags.split(",");
      const {title, rating, portion, time } = req.body;
      //console.log(req.body)
      const imagekit = new ImageKit({
        publicKey: public_key,
        privateKey: private_key,
        urlEndpoint: urlEndPoint,
      });
      imagekit
        .upload({
          file: file?.buffer,
          fileName: file?.originalname,
        })
        .then((result) => {
          console.log(result);
          Post.create({
            userId,
            portion,
            time,
            ingredients,
            steps,
            author,
            title,
            rating,
            tags,
            image_url: result.url,
          });
          return res.status(200).json({
            status:"Success",
            message:"Post Berhasil di Buat",
            result,
          });
        })
        .catch((err) => {
          console.log(err)
          return res.status(400).json({
            status:"Failed",
            message:err.message
          })
          
          next();
        });
    } catch (err) {
      next(err);
    }
  },
  get: async (req, res, next) => {
    try {
      const data = await Post.findAll();
      if (data) {
        return res.status(200).json({
          data,
        });
      } else console.log("err");
    } catch (err) {
      console.log(err);
    }
  },
};
