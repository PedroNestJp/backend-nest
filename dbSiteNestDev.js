require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()
const Router = require('./src/routes/routes');
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL


app.use(express.json())
app.use(cors())
app.use('/', Router)

 app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
 app.del('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
 })
 
app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})