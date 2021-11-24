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
    
    //RECIEN NACIDO
    bcg:{
        type: Number,
        required: false
    },
    
    hepatb:{
        type: Number,
        required: false
    },

    //2 MESES
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

    //4 MESES
    dpt2:{
        type: Number,
        required: false
    },

    neumococo2:{
        type: Number,
        required: false
    },

    rotavirus2:{
        type: Number,
        required: false
    },

    hepatb3:{
        type: Number,
        required: false
    },

    //6 MESES
    dpt3:{
        type: Number,
        required: false
    },

    neumococo3:{
        type: Number,
        required: false
    },

    rotavirus3:{
        type: Number,
        required: false
    },

    hepatb4:{
        type: Number,
        required: false
    },

    //7 MESES
    influenza:{
        type: Number,
        required: false
    },

    //8 MESES
    influenza2:{
        type: Number,
        required: false
    },

    //9 MESES
    meningococo:{
        type: Number,
        required: false
    },

    //1 AÑO
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

    //1 AÑO 1 MES
    hepata:{
        type: Number,
        required: false
    },

    //1 AÑO 3 MESES
    famarilla:{
        type: Number,
        required: false
    },

    //1 AÑO 6 MESES
    dpt4:{
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

    //1 AÑO 7 MESES
    hepata2:{
        type: Number,
        required: false
    },

    //2 AÑOS
    neumococo4:{
        type: Number,
        required: false
    },

    influenza3:{
        type: Number,
        required: false
    },

    //4 AÑOS
    dpt5:{
        type: Number,
        required: false
    },

    spr3:{
        type: Number,
        required: false
    },

    //9 AÑOS
    papilomavirus:{
        type: Number,
        required: false
    },

    //9 AÑOS 6 MESES
    papilomavirus2:{
        type: Number,
        required: false
    },

    //OTROS
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