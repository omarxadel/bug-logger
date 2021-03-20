const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const conn = mongoose.connect('mongodb+srv://omar_user:6040656@cluster0.ctelw.mongodb.net/buglogger?retryWrites=true&w=majority',
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