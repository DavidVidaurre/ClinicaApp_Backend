const express =  require('express')
const {dbConnection} = 
require('./database/config')

const cors= require('cors')

require('dotenv').config()

const app = express()

dbConnection()

app.use(cors())

app.use(express.static('public'));
//lectura y parseo
app.use(express.json());

//Rutas

//listen

//Escuchar peticiones
app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

