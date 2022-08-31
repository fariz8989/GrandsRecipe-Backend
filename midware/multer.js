const multer = require('multer')

const upload = multer({
    fileFilter : (req,file,cb)=>{
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
          ) {
            cb(null, true);
        }else{
            cb({
                name:"error file type"
            })
        }
    },limits:{fileSize:10*1024*1024}
}).single("file")
const execute = async (req, res, next) => {
    upload(req, res, function (err) {
     if(err instanceof multer.MulterError){
        return res.status(400).json({
            message:"Maximum File Size is 1Mb"
        })
     }else if(err){
         return res.status(400).json({
            message:err.name
        })
      
     }
      next();
    });
  };
module.exports=execute