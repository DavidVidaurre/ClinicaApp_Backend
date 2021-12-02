const Historia = require('../models/Historia');
// const Usuario = require('../models/Usuario')
const { validarDNI } = require('../functions/validaciones.js');
const { validarNombre } = require('../functions/validaciones.js');
const Usuario = require('../models/Usuario');
const { response } = require('express');

const CrearHistoria = async (req, res) => {
	const {
		dni_paciente,
		nombres_paciente,
		fecha_nac,
		//edad,
		lugar_nac,
		direccion,
		nombre_madre,
		ocupacion_madre,
		telefono_madre,
		nombre_padre,
		ocupacion_padre,
		telefono_padre,
		numero_hijo,
		referencia,
		sexo,
		id_Usuario,
	} = req.body;
	try {
		let historia = await Historia.findOne({ dni_paciente });
		if (historia) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya existe un Historia con este DNI',
			});
		}

		const DNIvalido = await validarDNI(dni_paciente);
		if (!DNIvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'DNI incorrecto',
			});
		}
		const NOMBREvalido = await validarNombre(nombres_paciente);
		if (!NOMBREvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'Nombre incorrecto',
			});
		}

		const LUGARNACvalido = await validarNombre(lugar_nac);
		if (!LUGARNACvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'Apellido Materno incorrecto',
			});
		}
		const NOMBREMADREvalido = await validarNombre(nombre_madre);
		if (!NOMBREMADREvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'Nombre incorrecto',
			});
		}
		const NOMBREPADREvalido = await validarNombre(nombre_padre);
		if (!NOMBREPADREvalido) {
			return res.status(400).json({
				ok: false,
				msg: 'Nombre incorrecto',
			});
		}

		const idUsuario = await Historia.find({ id_Usuario });
		if (!idUsuario) {
			res.status(404).json({
				ok: false,
				msg: 'Usuario no esxite',
			});
		}

		// let usuario = await Usuario.findOne({ dni });
		// console.log(usuario);
		// if (usuario === null && rol == 'Apoderado') {
		// 	return res.status(400).json({
		// 		ok: false,
		// 		msg: 'El usuario no existe por lo tanto no puede registrar un paciente',
		// 	});
		// }

		// if (rol == 'Apoderado') {
		// 	historia = new Historia(req.body);
		// 	await historia.save();
		// 	res.status(201).json({
		// 		ok: true,
		// 		historia: historia,
		// 	});
		// }
		historia = new Historia(req.body);
		await historia.save();
		res.status(201).json({
			ok: true,
			historia: historia,
		});
	} catch (error) {
		console.log('Error: ' + error.toString());
		res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador',
		});
	}
};

const ActualizarHistoria = async (req, res = response) => {
	const HistoriaId = req.params.id;
	try {
		const historia = await Historia.findById(HistoriaId);
		if (!historia) {
			res.status(404).json({
				ok: false,
				msg: 'Historia no existe con ese id',
			});
		}

		const nuevoHistoria = {
			...req.body,
		};

		const Historia_Actualizado = await Historia.findByIdAndUpdate(
			HistoriaId,
			nuevoHistoria,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			evento: Historia_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarHistoria = async (req, res) => {
	const historia = await Historia.find();
	return res.json(historia);
};
const MostrarHistoriaPorDNI = async(req,res)=> {
	const hist = await Historia.findOne({dni_paciente: req.params.dni_paciente})
	if(hist){
		return res.json(hist);
	}
	else{
		return res.status(400).json(
			{
				ok:false
				,msg: 'No se encontró esta historia'
			}
		)
	}
}

const MostrarHistoriaPorID = async (req, res) => {
	const h = await Historia.findOne({_id:req.params.id})
	return res.json(h)
}

const EliminarHistoria = async (req, res = response) => {
	const historiaId = req.params.id;
	const historia = await Historia.findByIdAndDelete(historiaId);
	if (historia) {
		console.log(historia);
		return res.json({
			ok: true,
			msg: 'Historia eliminado',
		});
	}
};

const MostrarPacientePorUsuario = async (req, res = response) => {
	const idUsuario = req.params.id_Usuario;
	const paciente = await Historia.findOne({ id_Usuario: idUsuario });
	if (paciente) {
		return res.json({
			paciente,
		});
		// console.log(usuario)
	}
	// const usuario = await Usuario.find();
	// return res.json(usuario);
};

module.exports = {
	CrearHistoria,
	ActualizarHistoria,
	MostrarHistoria,
	EliminarHistoria,
	MostrarPacientePorUsuario,
	MostrarHistoriaPorDNI,
	MostrarHistoriaPorID
};
