// const mongoose = require('mongoose');
// //@ts-check
// /**
//  * @module Config
//  */
// /**
//  * Función asíncrona que realizará la conexión a la base de datos
//  */
// const dbConnection = async () => {
// 	try {
// 		await mongoose.connect('mongodb://localhost:27017/clinica');
// 		console.log('estamos conectadoss a MongoDB ');
// 	} catch (err) {
// 		console.log(err);
// 		throw new Error('Error a la hora de inicializar la BD');
// 	}
// };
// // mongoose.connect('mongodb://localhost:27017/test');
// module.exports = {
//     dbConnection
// }

const {config} = require('dotenv')

config()
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test'
const PORT = process.env.PORT || 5000
// export const MONGODB_URI = process.env.MONGODB_URI
module.exports = {
	MONGODB_URI,
	PORT
}