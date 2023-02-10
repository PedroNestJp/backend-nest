const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const APP_URL = process.env.APP_URL
const cors = require('cors');
const Routes = require('./src/routes/routes');


app.use(express.json());

app.use(cors());

const productController = require('../backend-nest/src/controllers/product.controller')

app.get('/products', productController.getProducts)
app.get('/products/:id', productController.getproduct)
app.post('/product/create', productController.createProducts)
app.delete('/product/delete/:id', productController.deleteProduct)
app.put('/product/update/:id', productController.upProduct)

app.use('/', Routes);


app.listen (PORT || 8000, () => {
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})