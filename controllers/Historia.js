const Historia = require('../models/Historia');
const { validarDNI } = require('../functions/validaciones.js');
const { validarNombre } = require('../functions/validaciones.js');

const CrearHistoria = async (req, res) => {
	const {
		dni_paciente,
		nombres_paciente,
		fecha_nac,
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
	} = req.body;
	try {
		let historia = await Historia.findOne({ dni_paciente });
		if (historia) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya existe un Historiacon este DNI',
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
		const Historia = await Historia.findById(HistoriaId);
		if (!Historia) {
			res.status(404).json({
				ok: false,
				msg: 'Historiano existe con ese id',
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

// const MostrarHistoria= async (req, res) => {
//     const historia= await Historia.find();
//     return res.json(historia);
// }
    
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

module.exports = {
	CrearHistoria,
  ActualizarHistoria,
	MostrarHistoria,
  EliminarHistoria
}
