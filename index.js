import express from 'express';
import { dbConnection } from './database/database.js';
import { PORT } from './database/config.js'
import cors from 'cors';
import Antecedentes from './routes/Antecedentes.js'
import Auth from './routes/auth.js'
import Cita from './routes/Cita.js'
// import Foto from './routes/Foto.js'
import HistClinica from './routes/HistClinica.js'
import Historia from './routes/Historia.js'
import HistVacuna from './routes/HistVacuna.js'
import IndicacionOrden from './routes/IndicacionOrden.js'
import MedicamentoReceta from './routes/MedicamentoReceta.js'
import Orden from './routes/Orden.js'
import Receta from './routes/Receta.js'
import Reserva from './routes/Reserva.js'
import Vacuna from './routes/Vacuna.js'

const app = express();

dbConnection();

app.use(cors());

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('album'));
//lectura y parseo
app.use(express.json());

app.use('/api/auth', Auth);
app.use('/Historia', Historia);
app.use('/Cita', Cita);
app.use('/Vacuna', Vacuna);
app.use('/HistVacuna', HistVacuna);
app.use('/HistClinica', HistClinica);

app.use('/Antecedentes', Antecedentes);
// app.use('/Fotos', Foto);
app.use('/Reserva', Reserva);
app.use('/Receta', Receta);
app.use('/MedicamentoReceta', MedicamentoReceta)
app.use('/Orden', Orden)
app.use('/IndicacionOrden', IndicacionOrden)
app.listen(PORT)
console.log("Server on port", PORT);
