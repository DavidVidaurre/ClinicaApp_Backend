const { Router } = require('express');
/*Valida un campo*/
const { check } = require('express-validator');
/*Importar */
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const {
	crearUsuario,
	loginUsuario,
	revalidarToken,
} = require('../controllers/auth');

const { validarJWT } = require('../middlewares/validar-jwt');

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

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;
