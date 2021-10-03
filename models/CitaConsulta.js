const { Schema, model } = require('mongoose');
const CitaConsultaSchema = new Schema({
    fecha: {
		type: Date,
		required: false,
	},
    atendido: {
		type: Boolean,
		required: false,
	},
	cancelado:{
		type: Boolean,
		required: false,
	},
    id_Paciente:{
        type: Schema.Types.ObjectId,
        ref:'Paciente',
        required: true,
    }
});

module.exports = model('CitaConsulta', CitaConsultaSchema);