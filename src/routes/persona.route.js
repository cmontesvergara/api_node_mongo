const {Router} = require('express');
const router = Router();

const {getPersonas,getPersona,createPersona,editPersona,deletePersona} = require('../controller/persona.controller');

router.get('/personas', getPersonas);
router.get('/persona/:cedula', getPersona);
router.post('/persona', createPersona);
router.put('/persona/:cedula', editPersona);
router.delete('/persona/:cedula', deletePersona);

module.exports = router;