const { response } = require('express');
/*Importando modelo */
const Usuario = require('../models/Usuario');
/*bcryptjs*/
const bcrypt = require('bcryptjs');
/**JWT */
const { generarJWT } = require('../helpers/jwt');

const { validarDNI } = require('../functions/validaciones.js');

const { validarNombre } = require('../functions/validaciones.js');

const { validarRol } = require('../functions/validaciones.js');

const crearUsuario = async (req, res = response) => {
	const { nombre, dni, email, password, rol } = req.body;
	try {
		let usuario = await Usuario.findOne({ dni });
		if (usuario) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya existe un usuario con este DNI',
			});
		}
		const ROLvalido = await validarRol(rol);
		if (!ROLvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'ROL incorrecto',
			});
		}

		const DNIvalido = await validarDNI(dni);
		if (!DNIvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'DNI incorrecto',
			});
		}
		const NOMBREvalido = await validarNombre(nombre);
		if (!NOMBREvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'Nombre incorrecto',
			});
		}
		let usuario_email = await Usuario.findOne({ email });
		if (usuario_email) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya existe un usuario con este correo',
			});
		}
		usuario = new Usuario(req.body);
		//Encriptar contraseña
		const salt = bcrypt.genSaltSync();
		usuario.password = bcrypt.hashSync(password, salt);

		await usuario.save();
		//Generar JWT
		const token = await generarJWT(usuario.id, usuario.nombre);

		res.status(201).json({
			ok: true,
			uid: usuario.id,
			nombre: usuario.nombre,
			rol: usuario.rol,
			token,
		});
	} catch (error) {
		console.log('Error: ' + error.toString());
		res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador',
		});
	}
};

const loginUsuario = async (req, res = response) => {
	const { dni, password } = req.body;
	try {
		let usuario = await Usuario.findOne({ dni });
		console.log(usuario);
		if (!usuario) {
			return res.status(200).json({
				ok: false,
				msg: 'El usuario no existe con ese DNI',
			});
		}
		const validPassword = bcrypt.compareSync(
			password,
			usuario.password
		);

		if (!validPassword) {
			return res.status(200).json({
				ok: false,
				msg: 'Password incorrecto',
			});
		}

		const token = await generarJWT(usuario.id, usuario.nombre);
		res.status(201).json({
			ok: true,
			uid: usuario.id,
			name: usuario.name,
			rol: usuario.rol,
			token,
		});
	} catch (error) {
		console.log('Error: ' + error.toString());
		res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador',
		});
	}
};
const revalidarToken = async (req, res = response) => {
	/*Recibe req.uid y req.name del middleware*/
	const uid = req.uid;
	const name = req.name;
	/*Generar JWT*/
	const token = await generarJWT(uid, name);
	res.json({
		ok: true,
		uid,
		name,
		token,
	});
};

const EliminarUsuario = async (req, res = response) => {
	const usuarioId = req.params.id;
	const usuario = await Usuario.findByIdAndDelete(usuarioId);
	if (usuario) {
		console.log(usuario);
		return res.json({
			ok: true,
			msg: 'Usuario eliminado',
		});
	}
};

// const MostrarUsuario = async (req, res) => {
// 	const usuario = await Usuario.find();
// 	return res.json(usuario);
// };

const MostrarResponsable = async (req, res) => {
	const responsable = await Usuario.find({ rol: 'Apoderado' });
	if (responsable) {
		return res.json(responsable);
	}
};

module.exports = {
	crearUsuario,
	loginUsuario,
	revalidarToken,
	EliminarUsuario,
	MostrarResponsable,
};
