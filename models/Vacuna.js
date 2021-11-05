const { Schema, model } = require('mongoose');
const VacunaSchema = new Schema({
    /*nombre_vacuna:{
        type: String,
        required: false
    },
    previene:{
        type: String,
        required: false
    },
    dosis:{
        type: String,
        required: false
    },*/
    bcg:{
        type: Number,
        required: false
    },
    
    hepatb:{
        type: Number,
        required: false
    },

    dpt:{
        type: Number,
        required: false
    },

    neumococo:{
        type: Number,
        required: false
    },

    rotavirus:{
        type: Number,
        required: false
    },

    hepatb2:{
        type: Number,
        required: false
    },

    idem:{
        type: Number,
        required: false
    },

    idem2:{
        type: Number,
        required: false
    },

    influenza:{
        type: Number,
        required: false
    },

    influenza2:{
        type: Number,
        required: false
    },

    meningococo:{
        type: Number,
        required: false
    },

    spr:{
        type: Number,
        required: false
    },

    varicela:{
        type: Number,
        required: false
    },

    meningococo2:{
        type: Number,
        required: false
    },

    hepata:{
        type: Number,
        required: false
    },
    
    famarilla:{
        type: Number,
        required: false
    },

    dpt2:{
        type: Number,
        required: false
    },

    spr2:{
        type: Number,
        required: false
    },

    varicela2:{
        type: Number,
        required: false
    },

    hepata2:{
        type: Number,
        required: false
    },

    neumococo2:{
        type: Number,
        required: false
    },

    influenza3:{
        type: Number,
        required: false
    },

    dpt3:{
        type: Number,
        required: false
    },

    spr3:{
        type: Number,
        required: false
    },

    papilomavirus:{
        type: Number,
        required: false
    },

    papilomavirus2:{
        type: Number,
        required: false
    },

    otros:{
        type: String,
        required: false
    },

    id_Historia:{
        type: Schema.Types.ObjectId,
        ref:'Historia',
        required: true
    },

});

module.exports = model('Vacuna', VacunaSchema);