import { Router } from 'express';
/*Valida un campo*/
import { check } from 'express-validator';
/*Importar */
import { validarCampos } from '../middlewares/validar-campos.js';
import multer from 'multer';
import path from 'path'
const router = Router();

import {
	crearUsuario,
	loginUsuario,
	revalidarToken,
	EliminarUsuario,
	MostrarResponsable,
	MostrarResponsablePorId,
	subirFotoPerfil,
	me,
	ActualizarNombreResponsable
	// CambiarFotoPerfil,
} from '../controllers/auth.js';

import { validarJWT } from '../middlewares/validar-jwt.js';
import { EliminarCita } from '../controllers/Cita.js';

router.post(
	'/new',
	[
		//middlewares
		check('nombre', 'el nombre es obligatorio').not().isEmpty(),
		// check('email', 'El email es obligatorio').isEmail(),
		check(
			'password',
			'El password debe ser de 6 caracteres en adelante'
		).isLength({ min: 6 }),
		validarCampos,
	],
	crearUsuario
);

router.post(
	'/',
	[
		//middlewares
		check('dni', 'El DNI es obligatorio').isLength({
			min: 8,
            max: 8,
		}),
		check('password', 'EL password es obligatorio').isLength({
			min: 1,
		}),
		validarCampos,
	],
	loginUsuario
);
router.get('/me', validarJWT, me)
const storage = multer.diskStorage({
	destination: 'uploads/',
	filename: function (req, file, cb) {
		console.log(file)
		cb('',Date.now()+ '-' + file.originalname);
	},
});
const upload = multer({
	storage: storage,
});
router.post('/files', upload.single('avatar'),subirFotoPerfil);

router.get('/renew', validarJWT, revalidarToken);
router.put('/Responsable/:id', ActualizarNombreResponsable)
router.delete("/:id", EliminarUsuario)
router.get('/', MostrarResponsable)
router.get('/:id', MostrarResponsablePorId)
router.get('/uploads/:name', function (req, res, next) {
	var options = {
	  root: path.join(path.dirname(require.main.filename) , 'uploads'),
	}
	var fileName = req.params.name
	res.sendFile(fileName, options, function (err) {
	  if (err) {
		next(err)
	  } else {
		console.log('Sent:', fileName)
	  }
	})
  })



// router.post('/files', CambiarFotoPerfil)

export default router;
