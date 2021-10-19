const { response } = require('express');
const Foto = require('../models/Foto');
const Historia= require('../models/Historia');

const crearFoto = async (req, res = response) => {
	const { nombre, id_Historia } = req.body;
	const idHistoria= await Historia.findOne({id_Historia});
	if (!idHistoria) {
		res.status(404).json({
			ok: false,
			msg: 'Historia no existe con ese id',
		});
	}

	let foto = new Foto(req.body);
	await foto.save();
	return res.json({
		ok: true,
		msg: 'Foto guardada correctamente',
	});
};

const MostrarFotos = async (req, res) => {
	const foto = await Foto.find();
	return res.json(foto);
};

module.exports = {
	crearFoto,
	MostrarFotos
};
