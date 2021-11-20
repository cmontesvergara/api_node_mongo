const mongoose = require('mongoose');
const {Schema} = require('mongoose');

let personSchema = new Schema ({
    cedula: {type:String , required:true},
    nombre: {type:String , required:true},
    apellido: {type:String , required:true},
    telefono: String,
    direcciones: [{direccion:String,ciudad:String}],
    token:String
});

const Person  = mongoose.model('Person',personSchema);

module.exports = Person; 