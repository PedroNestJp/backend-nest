const {Router} = require('express')
const router = Router()

const userController = require('../controllers/user.controller')
const userPjController = require('../controllers/userPj')
const productController = require('../controllers/product.controller')

router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getproduct)
router.post('/product/create', productController.createProducts)
router.delete('/product/delete/:id', productController.deleteProduct)
router.put('/product/update/:id', productController.upProduct)

router.get('/userpj/:id', userPjController.getUserPj)
router.get('/userspj', userPjController.getUsersPj)
router.post('/userpj/create', userPjController.createUserPjEnd)
router.delete('/userpj/delete/:id', userPjController.deleteUserPj)
router.put('/userpj/update/:id', userPjController.upUserPJ)

router.get('/user/:id', userController.getUser)
router.get('/users', userController.getUsers)
router.post('/user/create',userController.createUser)
router.delete('/user/delete/:id', userController.deleteUser)
router.put('/user/update/:id', userController.upUser)
router.put('/users/update/:id', userController.upUsers)

module.exports = router