const { Schema, model } = require('mongoose');
const CitaVacunaSchema = new Schema({
    fecha:{
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
        required: true
    },
    id_Vacuna:{
        type: Schema.Types.ObjectId,
        ref:'Vacuna',
        required: true
    }
});

module.exports = model('CitaVacuna', CitaVacunaSchema);