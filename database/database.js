const mongoose = require('mongoose');
const {MONGODB_URI} = require("./config")

// (async () => {
//     try {
//         const db = await connect(MONGODB_URI)
//         console.log("DB connected to ", db.connection.name)
//     } catch (error) {
//         console.log(error)
//     }
// })()

const dbConnection = async () => {
    try {
        const db = await mongoose.connect(MONGODB_URI)
        console.log("DB connected to", db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    dbConnection
}