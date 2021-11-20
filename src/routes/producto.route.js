const {Router} = require('express');
const router = Router();

const {getProductos,getProducto,createProducto,editProducto,deleteProducto} = require('../controller/producto.controller');

router.get('/productos',getProductos);
router.get('/producto/:codigo',getProducto);
router.post('/producto',createProducto);
router.put('/producto/:codigo',editProducto);
router.delete('/producto/:codigo',deleteProducto);

module.exports = router;