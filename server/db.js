const mongoose = require('mongoose');

const userName = "raffaySajjad"
const password = "26111997"
const dbName = "comfyRooms"

const dbURL = `mongodb+srv://${userName}:${password}@mongo-cluster.damzf.mongodb.net/${dbName}?authSource=admin&replicaSet=atlas-s7z01e-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`

mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true})
let connection = mongoose.connection

connection.on('error', () => {
    console.log('Unable to connect to MongoDB')
})

connection.on('connected', () => {
    console.log("MongoDB connection established :)")
})

module.exports = mongoose

