import multer from 'multer';
const storage = multer.diskStorage({
	destination: '../uploads/',
	filename: function (req, file, cb) {
		console.log(file)
		cb('',Date.now()+ '-' + file.originalname);
	},
});
const upload = multer({
	storage: storage,
});
const subir = ()=>{
    upload.single('avatar')
}
export {
    subir
}