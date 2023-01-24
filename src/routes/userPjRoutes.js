const {Router} = require('express')
const router = Router()
const userPjController = require('../controllers/userPj')

router.get('/userpj/:id', userPjController.getUserPj)
router.get('/userspj', userPjController.getUsersPj)
router.post('/userpj/create', userPjController.createUserPjEnd)
router.delete('/userpj/delete/:id', userPjController.deleteUserPj)
router.put('/userpj/update/:id', userPjController.upUserPJ)

module.exports = router