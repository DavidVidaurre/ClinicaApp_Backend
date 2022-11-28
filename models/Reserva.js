import pkg from 'mongoose';
const { Schema, model } = pkg;
const ReservaSchema = new Schema({
    nombre_paciente:{
		type: String,
		required: false,
	},
    fecha:{
		type: Date,
		required: false,
	}
});
export default model('Reserva', ReservaSchema);