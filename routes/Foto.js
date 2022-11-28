import { Router } from 'express';
const router = Router();
// import multer from 'multer';
import path from 'path'
// import { 
// 	crearFoto, 
// 	MostrarFotos,
// 	MostrarFotosxHistoria 
// } from '../controllers/Foto.js';

// // Create
// router.post('/new', crearFoto);

// const storage = multer.diskStorage({
// 	destination: 'album/',
// 	filename: function (req, file, cb) {
// 		console.log(file);
// 		cb('', Date.now() + '-' + file.originalname);
// 	},
// });

// const upload = multer({
// 	storage: storage,
// });

// router.post('/files', upload.single('foto'), crearFoto);
// router.get('/',MostrarFotos)
// router.get('/:id',MostrarFotosxHistoria)
// //mostrar
// router.get('/album/:name', function (req, res, next) {
// 	var options = {
// 	  root: path.join(path.dirname(require.main.filename) , 'album'),
// 	}
// 	var fileName = req.params.name
// 	res.sendFile(fileName, options, function (err) {
// 	  if (err) {
// 		next(err)
// 	  } else {
// 		console.log('Sent:', fileName)
// 	  }
// 	})
//   })

export default router;
