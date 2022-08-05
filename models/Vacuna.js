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
    fechabcg:{
        type: Date,
        required: false
    },
    
    hepatb:{
        type: Number,
        required: false
    },
    fechahepatb:{
        type: Date,
        required: false
    },

    //2 MESES
    dpt:{
        type: Number,
        required: false
    },
    fechadpt:{
        type: Date,
        required: false
    },

    neumococo:{
        type: Number,
        required: false
    },
    fechaneumococo:{
        type: Date,
        required: false
    },

    rotavirus:{
        type: Number,
        required: false
    },
    fecharotavirus:{
        type: Date,
        required: false
    },

    hepatb2:{
        type: Number,
        required: false
    },
    fechahepatb2:{
        type: Date,
        required: false
    },

    //4 MESES
    dpt2:{
        type: Number,
        required: false
    },
    fechadpt2:{
        type: Date,
        required: false
    },

    neumococo2:{
        type: Number,
        required: false
    },
    fechaneumococo2:{
        type: Date,
        required: false
    },

    rotavirus2:{
        type: Number,
        required: false
    },
    fecharotavirus2:{
        type: Date,
        required: false
    },

    hepatb3:{
        type: Number,
        required: false
    },
    fechahepatb3:{
        type: Date,
        required: false
    },

    //6 MESES
    dpt3:{
        type: Number,
        required: false
    },
    fechadpt3:{
        type: Date,
        required: false
    },

    neumococo3:{
        type: Number,
        required: false
    },
    fechaneumococo3:{
        type: Date,
        required: false
    },

    rotavirus3:{
        type: Number,
        required: false
    },
    fecharotavirus3:{
        type: Date,
        required: false
    },

    hepatb4:{
        type: Number,
        required: false
    },
    fechahepatb4:{
        type: Date,
        required: false
    },

    //7 MESES
    influenza:{
        type: Number,
        required: false
    },
    fechainfluenza:{
        type: Date,
        required: false
    },

    //8 MESES
    influenza2:{
        type: Number,
        required: false
    },
    fechainfluenza2:{
        type: Date,
        required: false
    },

    //9 MESES
    meningococo:{
        type: Number,
        required: false
    },
    fechameningococo:{
        type: Date,
        required: false
    },

    //1 AÑO
    spr:{
        type: Number,
        required: false
    },
    fechaspr:{
        type: Date,
        required: false
    },

    varicela:{
        type: Number,
        required: false
    },
    fechavaricela:{
        type: Date,
        required: false
    },

    meningococo2:{
        type: Number,
        required: false
    },
    fechameningococo2:{
        type: Date,
        required: false
    },

    //1 AÑO 1 MES
    hepata:{
        type: Number,
        required: false
    },
    fechahepata:{
        type: Date,
        required: false
    },

    //1 AÑO 3 MESES
    famarilla:{
        type: Number,
        required: false
    },
    fechafamarilla:{
        type: Date,
        required: false
    },

    //1 AÑO 6 MESES
    dpt4:{
        type: Number,
        required: false
    },
    fechadpt4:{
        type: Date,
        required: false
    },

    spr2:{
        type: Number,
        required: false
    },
    fechaspr2:{
        type: Date,
        required: false
    },

    varicela2:{
        type: Number,
        required: false
    },
    fechavaricela2:{
        type: Date,
        required: false
    },

    //1 AÑO 7 MESES
    hepata2:{
        type: Number,
        required: false
    },
    fechahepata2:{
        type: Date,
        required: false
    },

    //2 AÑOS
    neumococo4:{
        type: Number,
        required: false
    },
    fechaneumococo4:{
        type: Date,
        required: false
    },

    influenza3:{
        type: Number,
        required: false
    },
    fechainfluenza3:{
        type: Date,
        required: false
    },

    //4 AÑOS
    dpt5:{
        type: Number,
        required: false
    },
    fechadpt5:{
        type: Date,
        required: false
    },

    spr3:{
        type: Number,
        required: false
    },
    fechaspr3:{
        type: Date,
        required: false
    },

    //9 AÑOS
    papilomavirus:{
        type: Number,
        required: false
    },
    fechapapilomavirus:{
        type: Date,
        required: false
    },

    //9 AÑOS 6 MESES
    papilomavirus2:{
        type: Number,
        required: false
    },
    fechapapilomavirus2:{
        type: Date,
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