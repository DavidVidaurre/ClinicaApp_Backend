const { Schema, model } = require('mongoose');
const RecetaTotalSchema = new Schema({
    fechaProx:{
		type: Date,
		required: false,
	},
    id_HistClinica:{
        type: Schema.Types.ObjectId,
        ref:'HistClinica',
        required:false,
    }
})

module.exports = model('RecetaTotal', RecetaTotalSchema)