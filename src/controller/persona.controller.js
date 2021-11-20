const personaCtrl = {};
const Person = require('../model/persona.model')
const jwt = require('jsonwebtoken')
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
        const personas = await Person.findOne({cedula:req.params.cedula});
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
            token:""

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

personaCtrl.token = async (req, res )=>{
    try {
        const {cedula} = req.body;
        if(!(cedula)){
            res.status(400).send("cedula requerida");

        }
        const prs = await Person.findOne({cedula:cedula});
        if(prs){
            const token = jwt.sign({user_id:prs._id,cedula},process.env.TOKEN_KEY,{
                expiresIn:"24h"
            })

            await Person.updateOne({cedula:cedula},{token:token})

            res.status(201).json(token);
        }
        res.status(400).send("credenciales Invalidas")
        
        
    } catch (error) {
        console.log(error);
        res.send("Ocurrio un Error Interno");
        
    }
}

module.exports = personaCtrl;


