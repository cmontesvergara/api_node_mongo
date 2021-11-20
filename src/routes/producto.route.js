const {Router} = require('express');
const router = Router();

const auth = require('../auth/auth')

const {getProductos,getProducto,createProducto,editProducto,deleteProducto} = require('../controller/producto.controller');

router.get('/productos',auth,getProductos);
router.get('/producto/:codigo',auth,getProducto);
router.post('/producto',auth,createProducto);
router.put('/producto/:codigo',auth,editProducto);
router.delete('/producto/:codigo',auth,deleteProducto);

module.exports = router;