const { response } = require('express');
const Foto = require('../models/Foto');

const crearFoto = async (req, res = response) => {
	const { nombre, id_Historia } = req.body;
	let foto = new Foto(req.body);
	await foto.save();
	return res.json({
		ok: true,
		msg: 'Foto guardada correctamente',
	});
};

module.exports = {
	crearFoto
};
