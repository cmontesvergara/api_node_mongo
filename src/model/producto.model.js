const mongoose = require('mongoose');
const {Schema} = require('mongoose');

let productoSchema = new Schema({
    nombre: String,
    codigo: Number,
    descripcion: String,
    precio: String,
    unidades: Number,
});

const Producto = mongoose.model('Producto',productoSchema);

module.exports = Producto;