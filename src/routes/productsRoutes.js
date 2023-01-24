const {Router} = require('express')
const router = Router()
const productController = require('../controllers/product.controller')

router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getproduct)
router.post('/product/create', productController.createProducts)
router.delete('/product/delete/:id', productController.deleteProduct)
router.put('/product/update/:id', productController.upProduct)

module.exports = router