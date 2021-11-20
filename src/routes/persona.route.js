const {Router} = require('express');
const router = Router();
const auth = require('../auth/auth')
const {token,getPersonas,getPersona,createPersona,editPersona,deletePersona} = require('../controller/persona.controller');

router.get('/personas',auth, getPersonas);
router.get('/persona/:cedula',auth, getPersona);
router.post('/persona',auth, createPersona);
router.post('/persona/token', token);
router.put('/persona/:cedula',auth, editPersona);
router.delete('/persona/:cedula',auth, deletePersona);

module.exports = router;