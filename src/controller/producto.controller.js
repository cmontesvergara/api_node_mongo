const productoCtrl = {};
const Product  = require('../model/producto.model');

productoCtrl.getProductos = async (req,res)=>{
    try {

        const productos  = await Product.find({});
        res.status(200).json(productos);
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Ocurrio un error en la operaion.")
    }
}

productoCtrl.getProducto = async (req,res)=>{
    try {

        const producto  = await Product.findOne({codigo:req.params.codigo});
        res.status(200).json(producto);
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Ocurrio un error en la operaion.")
    }
}

productoCtrl.createProducto = async (req,res)=>{
    try {

       const {     
            nombre,
            codigo,
            descripcion,
            precio,
            unidades
        } = req.body;

        let _producto  =  new Product({nombre,codigo,descripcion,precio,unidades});
        await _producto.save();

        res.status(201).send('Creado Satisfactoriamente.');
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Ocurrio un error en la operaion.")
    }
}

productoCtrl.editProducto = async (req,res)=>{
    try {

       const {     
            nombre,
            codigo,
            descripcion,
            precio,
            unidades
        } = req.body;

        await Product.updateOne({codigo:req.params.codigo},{nombre,
            codigo,
            descripcion,
            precio,
            unidades});

        res.status(200).send('Actualizado Satisfactoriamente.');
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Ocurrio un error en la operaion.")
    }
}

productoCtrl.deleteProducto = async (req,res)=>{
    try {

      

        await Product.deleteOne({codigo:req.params.codigo});

        res.status(200).send('Eliminado Satisfactoriamente.');
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Ocurrio un error en la operaion.")
    }
}

module.exports = productoCtrl;