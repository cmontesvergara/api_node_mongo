const {Router } = require('express');
const router = Router();

const {main} = require('../controller/main.controller');


router.get('/',main);

module.exports = router;