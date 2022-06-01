const Cita = require('../models/Cita');
const Historia = require('../models/Historia');
const HistClinica = require('../models/HistClinica');
const moment = require('moment');
const { response } = require('express');
const CrearCita = async (req, res) => {
	const {
		nombre_paciente,
		//fecha_nac,
		telefono,
		//sexo,
		//edad,
		DNI,
		responsable,
		condicion,
		motivo,
		fecha,
		hora,
	} = req.body;
	// const CitaId = req.params.id;
	// const idHistoria = req.id_Historia;
	try {
		//
		let fechaConsulta = await Cita.findOne({ fecha });
		if (fechaConsulta) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya existe una cita para consulta a esa hora',
			});
		}
		let historia = await Historia.findOne({ dni_paciente: DNI });

		console.log(historia);
		if (historia !== null) {
			if (condicion == 1) {
				// console.log(DNI);
				return res.status(400).json({
					ok: false,
					msg: 'ERROR, La historia ya existe por lo tanto no puede ser un paciente nuevo',
				});
			}
		}

		if (historia === null) {
			if (condicion == 2)
				return res.status(400).json({
					ok: false,
					msg: 'La historia no existe por lo tanto no puede ser un paciente continuador',
				});
		}

		if (condicion == 1) {
			let historia = new Historia({
				nombres_paciente: nombre_paciente,
				//fecha_nac,
				dni_paciente: DNI,
				/*sexo : sexo,
				edad,*/
			});
			await historia.save();
			//generando automaticamente la hc
			let hc = new HistClinica({
				id_Historia: historia._id,
				fecha: new Date(fecha),
				// id_Cita: cita._id
			});
			await hc.save();
			let cita = new Cita({
				fecha: new Date(fecha),
				motivo,
				responsable,
				nombre_paciente,
				//fecha_nac,
				telefono,
				//sexo,
				DNI,
				condicion,
				id_Historia: historia._id,
				id_HistClinica: hc._id
			});
			await cita.save();
			console.log(hc._id);
			res.status(201).json({
				ok: true,
				cita: cita
			});
		}
		if (condicion == 2) {
			let buscar = await Historia.findOne({ dni_paciente: DNI });
			console.log('Continuador: ' + buscar);
			let hc = new HistClinica({
				id_Historia: historia._id,
				fecha: new Date(fecha),
				// id_Cita: cita._id
			});
			await hc.save();
			let cita = new Cita({
				fecha: new Date(fecha),
				motivo,
				responsable,
				//fecha_nac,
				nombre_paciente,
				fechaConsulta,
				telefono,
				//sexo,
				DNI,
				condicion,
				id_Historia: buscar._id,
				id_HistClinica: hc._id
			});

			await cita.save();
			//generando automaticamente la hc
			res.status(201).json({
				ok: true,
				cita: cita,
			});
		}
	} catch (error) {
		console.log('Error: ' + error.toString());
		res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador',
		});
	}
};

const ActualizarCita = async (req, res = response) => {
	const CitaId = req.params.id;
	const idPaciente = req.id_Paciente;
	try {
		const Cita = await Cita.findById(CitaId);
		if (!Cita) {
			res.status(404).json({
				ok: false,
				msg: 'Cita para Consulta no existe con ese id',
			});
		}
		if (Cita.id_Paciente.toString() !== idPaciente) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaCita = {
			...req.body,
			id_Paciente: idPaciente,
		};

		const CitaActualizado = await Cita.findByIdAndUpdate(
			CitaId,
			nuevaCita,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			Cita: CitaActualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const ActualizarIDHistClinicaParaCita = async (req, res = response) => {
	const fechaCita = req.params.fecha;
	const histClinica = await HistClinica.findOne({fecha: fechaCita})
	
	if(histClinica){
		Cita.findOneAndUpdate(
			{fecha: histClinica.fecha}, 
			{$set: {id_HistClinica: histClinica._id}},
			{new: true},
			function(err, doc){
				if (err) { throw err; }
			}
		);

		return res.json({
			ok: true,
			msg: "Actualizado"
		})
	}

	return res.json({
		ok: false,
		msg: 'Operación no completada'
	})
}

const MostrarCita = async (req, res) => {
	const cita = await Cita.find();
	return res.json(cita);
};

const EliminarCita = async (req, res = response) => {
	const CitaId = req.params.id;
	const cita = await Cita.findByIdAndDelete(CitaId);
	if (cita) {
		console.log(cita);
		return res.json({
			ok: true,
			msg: 'Cita eliminado',
		});
	}
};

module.exports = {
	CrearCita,
	ActualizarCita,
	MostrarCita,
	EliminarCita,
	ActualizarIDHistClinicaParaCita
};
