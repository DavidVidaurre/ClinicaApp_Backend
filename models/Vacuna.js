import pkg from 'mongoose';
const { Schema, model } = pkg;
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
        type: Boolean,
        required: false
    },
    fechabcg:{
        type: Date,
        required: false
    },
    
    hepatb:{
        type: Boolean,
        required: false
    },
    fechahepatb:{
        type: Date,
        required: false
    },

    //2 MESES
    dpt:{
        type: Boolean,
        required: false
    },
    fechadpt:{
        type: Date,
        required: false
    },

    neumococo:{
        type: Boolean,
        required: false
    },
    fechaneumococo:{
        type: Date,
        required: false
    },

    rotavirus:{
        type: Boolean,
        required: false
    },
    fecharotavirus:{
        type: Date,
        required: false
    },

    hepatb2:{
        type: Boolean,
        required: false
    },
    fechahepatb2:{
        type: Date,
        required: false
    },

    //4 MESES
    dpt2:{
        type: Boolean,
        required: false
    },
    fechadpt2:{
        type: Date,
        required: false
    },

    neumococo2:{
        type: Boolean,
        required: false
    },
    fechaneumococo2:{
        type: Date,
        required: false
    },

    rotavirus2:{
        type: Boolean,
        required: false
    },
    fecharotavirus2:{
        type: Date,
        required: false
    },

    hepatb3:{
        type: Boolean,
        required: false
    },
    fechahepatb3:{
        type: Date,
        required: false
    },

    //6 MESES
    dpt3:{
        type: Boolean,
        required: false
    },
    fechadpt3:{
        type: Date,
        required: false
    },

    neumococo3:{
        type: Boolean,
        required: false
    },
    fechaneumococo3:{
        type: Date,
        required: false
    },

    rotavirus3:{
        type: Boolean,
        required: false
    },
    fecharotavirus3:{
        type: Date,
        required: false
    },

    hepatb4:{
        type: Boolean,
        required: false
    },
    fechahepatb4:{
        type: Date,
        required: false
    },

    //7 MESES
    influenza:{
        type: Boolean,
        required: false
    },
    fechainfluenza:{
        type: Date,
        required: false
    },

    //8 MESES
    influenza2:{
        type: Boolean,
        required: false
    },
    fechainfluenza2:{
        type: Date,
        required: false
    },

    //9 MESES
    meningococo:{
        type: Boolean,
        required: false
    },
    fechameningococo:{
        type: Date,
        required: false
    },

    //1 AÑO
    spr:{
        type: Boolean,
        required: false
    },
    fechaspr:{
        type: Date,
        required: false
    },

    varicela:{
        type: Boolean,
        required: false
    },
    fechavaricela:{
        type: Date,
        required: false
    },

    meningococo2:{
        type: Boolean,
        required: false
    },
    fechameningococo2:{
        type: Date,
        required: false
    },

    //1 AÑO 1 MES
    hepata:{
        type: Boolean,
        required: false
    },
    fechahepata:{
        type: Date,
        required: false
    },

    //1 AÑO 3 MESES
    famarilla:{
        type: Boolean,
        required: false
    },
    fechafamarilla:{
        type: Date,
        required: false
    },

    //1 AÑO 6 MESES
    dpt4:{
        type: Boolean,
        required: false
    },
    fechadpt4:{
        type: Date,
        required: false
    },

    spr2:{
        type: Boolean,
        required: false
    },
    fechaspr2:{
        type: Date,
        required: false
    },

    varicela2:{
        type: Boolean,
        required: false
    },
    fechavaricela2:{
        type: Date,
        required: false
    },

    //1 AÑO 7 MESES
    hepata2:{
        type: Boolean,
        required: false
    },
    fechahepata2:{
        type: Date,
        required: false
    },

    //2 AÑOS
    neumococo4:{
        type: Boolean,
        required: false
    },
    fechaneumococo4:{
        type: Date,
        required: false
    },

    influenza3:{
        type: Boolean,
        required: false
    },
    fechainfluenza3:{
        type: Date,
        required: false
    },

    //4 AÑOS
    dpt5:{
        type: Boolean,
        required: false
    },
    fechadpt5:{
        type: Date,
        required: false
    },

    spr3:{
        type: Boolean,
        required: false
    },
    fechaspr3:{
        type: Date,
        required: false
    },

    //9 AÑOS
    papilomavirus:{
        type: Boolean,
        required: false
    },
    fechapapilomavirus:{
        type: Date,
        required: false
    },

    //9 AÑOS 6 MESES
    papilomavirus2:{
        type: Boolean,
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

export default model('Vacuna', VacunaSchema);