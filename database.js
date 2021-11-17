if (process.env.NODE_ENV != 'production'){
    require('dotenv').config();
};

const uri = process.env.DB_URI;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

async function conectar(){
    try {
        await mongoose.connect(uri,{useNewUrlParser:true,
        useUnifiedTopology:true});
    } catch (error) {
        console.log(error);
    }
}
conectar();
let db = mongoose.connection;

db.once('open',()=>{
    console.log("Conectado a Mongo Atlas") 
})


module.exports = mongoose;