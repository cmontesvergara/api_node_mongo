const personaCtrl = {};
const Person = require('../model/persona.model')
personaCtrl.getPersonas = async (req,res)=>{ 
    try {
        const personas = await Person.find({});
        res.json(personas);
    } catch (error) {
        console.log(error);
    }
};
personaCtrl.getPersona = async (req,res)=>{ 
    try {
        const personas = await Person.find({cedula:req.params.cedula});
        if(personas.length ==0){
            res.send("No se encontro en la DB");
        }else{
            res.json(personas);
        }
        
    } catch (error) {
        console.log(error);
    }
};
personaCtrl.createPersona = async (req,res)=>{ 
    try {
        const personTemp = {
            cedula:req.body.cedula,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            telefono:req.body.telefono,
            direccion:req.body.direccion,

        };
        let _persona = new Person(personTemp);
        await _persona.save();
        res.send("creado")

    } catch (error) {
        console.log(error);
    }
};
personaCtrl.editPersona = async (req,res)=>{ 
    try {
        const personTemp = {
            cedula:req.body.cedula,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            telefono:req.body.telefono,
            direcciones:req.body.direcciones,

        };
        
        await Person.updateOne({cedula:req.params.cedula},personTemp);
        res.send("Actualizado");

    } catch (error) {
        console.log(error);
    }
};
personaCtrl.deletePersona = async (req,res)=>{ 
    
    try {
        await Person.deleteOne({cedula:req.params.cedula});
        res.send("Eliminado Correctamente");
    } catch (error) {
        console.log(error)
    }
};

module.exports = personaCtrl;


