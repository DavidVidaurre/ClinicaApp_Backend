const { Schema, model } = require('mongoose');
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

module.exports = model('HistVacuna', HistVacunaSchema);