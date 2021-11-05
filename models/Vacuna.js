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
        type: Boolean,
        required: false
    },
    
    hepatb:{
        type: Boolean,
        required: false
    },

    dpt:{
        type: Boolean,
        required: false
    },

    neumococo:{
        type: Boolean,
        required: false
    },

    rotavirus:{
        type: Boolean,
        required: false
    },

    hepatb2:{
        type: Boolean,
        required: false
    },

    idem:{
        type: Boolean,
        required: false
    },

    idem2:{
        type: Boolean,
        required: false
    },

    influenza:{
        type: Boolean,
        required: false
    },

    influenza2:{
        type: Boolean,
        required: false
    },

    meningococo:{
        type: Boolean,
        required: false
    },

    spr:{
        type: Boolean,
        required: false
    },

    varicela:{
        type: Boolean,
        required: false
    },

    meningococo2:{
        type: Boolean,
        required: false
    },

    hepata:{
        type: Boolean,
        required: false
    },
    
    famarilla:{
        type: Boolean,
        required: false
    },

    dpt2:{
        type: Boolean,
        required: false
    },

    spr2:{
        type: Boolean,
        required: false
    },

    varicela2:{
        type: Boolean,
        required: false
    },

    hepata2:{
        type: Boolean,
        required: false
    },

    neumococo2:{
        type: Boolean,
        required: false
    },

    influenza3:{
        type: Boolean,
        required: false
    },

    dpt3:{
        type: Boolean,
        required: false
    },

    spr3:{
        type: Boolean,
        required: false
    },

    papilomavirus:{
        type: Boolean,
        required: false
    },

    papilomavirus2:{
        type: Boolean,
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