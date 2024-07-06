const mongoose = require("mongoose");

const mongodbUrl = "mongodb+srv://hritikblcm:hritik@cluster0.xyovae7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    console.log("mongoDb connected on the server");
    return mongoose.connect(mongodbUrl)
}

module.exports = connectDB