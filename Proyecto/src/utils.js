import multer from 'multer';

const storage = multer.diskStorage({
    destination: funtion(req,file,cb){
        cb(null,__dirname+'./src/files')
    },
filename: function(req,file,cb){
    cb(null,file.originalname)
}
})

export const uploader = multer({storage});