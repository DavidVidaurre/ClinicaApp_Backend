const { validationResult } = require('express-validator');
const { response } = require('express');

const validarCampos = (req, res = response, next) => {
	//manejo de errores
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			ok: false,
			//esta mapeado para mostrar
			errors: errors.mapped(),
		});
	}
	next();
};

module.exports = {
	validarCampos,
};
