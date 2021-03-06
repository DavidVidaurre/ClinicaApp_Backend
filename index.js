const express = require('express');
const { dbConnection } = require('./database/config');

const cors = require('cors');

require('dotenv').config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('album'));
//lectura y parseo
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/Historia', require('./routes/Historia'));
app.use('/Cita', require('./routes/Cita'));
app.use('/Vacuna', require('./routes/Vacuna'));
app.use('/HistVacuna', require('./routes/HistVacuna'));
app.use('/HistClinica', require('./routes/HistClinica'));

app.use('/Antecedentes', require('./routes/Antecedentes'));
app.use('/Fotos', require('./routes/Foto'));
app.use('/Reserva', require('./routes/Reserva'));
app.use('/Receta', require('./routes/Receta'));
app.use('/MedicamentoReceta', require('./routes/MedicamentoReceta'))
app.use('/Orden', require('./routes/Orden'))
app.use('/IndicacionOrden', require('./routes/IndicacionOrden'))
app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
