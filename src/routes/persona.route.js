const {Router} = require('express');
const router = Router();
const auth = require('../auth/auth')
const {token,getPersonas,getPersona,createPersona,editPersona,deletePersona} = require('../controller/persona.controller');

router.get('/personas', getPersonas);
router.get('/persona/:cedula',auth, getPersona);
router.post('/persona',auth, createPersona);
router.post('/persona/token', token);
router.put('/persona/:cedula', editPersona);
router.delete('/persona/:cedula', deletePersona);

module.exports = router;