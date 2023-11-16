const mongoose = require('mongoose')

const MONGODB_URI = "YOUR_URI_HERE"
const connectDB = async () =>{
    try{
        const conn = mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
        )

        console.log('MongoDB Connected');
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
