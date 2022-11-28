import pkg from 'mongoose';
const { Schema, model } = pkg;
const HistVacunaSchema = new Schema({
    fecha:{
		type: Date,
		required: false,
	},
    id_Historia:{
        type: Schema.Types.ObjectId,
        ref:'Historia',
        required: true
    }
});

export default model('HistVacuna', HistVacunaSchema);