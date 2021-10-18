const { Router } = require('express');
/*Valida un campo*/
const { check } = require('express-validator');
/*Importar */
const { validarCampos } = require('../middlewares/validar-campos');
const multer = require('multer');
const path = require('path')
const router = Router();

const {
	crearUsuario,
	loginUsuario,
	revalidarToken,
	EliminarUsuario,
	MostrarResponsable,
	MostrarResponsablePorId,
	subirFotoPerfil
	// CambiarFotoPerfil,
} = require('../controllers/auth');

const { validarJWT } = require('../middlewares/validar-jwt');
const { EliminarCita } = require('../controllers/Cita');

router.post(
	'/new',
	[
		//middlewares
		check('nombre', 'el nombre es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').isEmail(),
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

module.exports = router;
