//import multer
const multer = require('multer')

//disk storage - the disk storage engine gives you full control on storing files to disk.

const storage = multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'./uploads')
    },
    filename:(req,file,callBack)=>{
        const filename=`image-${Date.now}-${file.originalname}`
        callBack(null,filename)
    }
})

//file filter
const fileFilter=(req,file,callBack)=>{
    if(file.mimetype=="image/png" || file.mimetype=="image/jpg" || file.mimetype=="image/jpeg"){
        callBack(null,true)
    }else{
        callBack(null,false)
        return callBack(new Error(`Only png, jpg, Jpeg files are allowed`))
    }
}

//multer configuration
const multerConfig=multer({
    storage,
    fileFilter
})

module.exports= multerConfig