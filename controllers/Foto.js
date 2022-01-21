const { response } = require('express');
const Foto = require('../models/Foto');
const Historia = require('../models/Historia');

const crearFoto = async (req, res = response) => {
	
	const hId = req.headers.id;
	const { filename } = req.file;
	console.log(filename);
	let foto = new Foto({
		...req.body,
		nombre: filename,
		id_Historia: hId
	});
	await foto.save();
	return res.json({
		ok: true,
		msg: 'Foto guardada correctamente',
	});
};

const MostrarFotos = async (req, res) => {
	const fotos = await Foto.find();
	return res.json(fotos);
};
const MostrarFotosxHistoria = async(req,res)=>{
	const hId = req.params.id;
	const fotos = await Foto.find({id_Historia: hId});
	// const fxh= fotos.filter((item)=> item.id_Historia === hId)
	return res.json(fotos)
}
module.exports = {
	crearFoto,
	MostrarFotos,
	MostrarFotosxHistoria
};
