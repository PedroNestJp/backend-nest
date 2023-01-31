require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()
const Router = require('./src/routes/routes');
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

app.use(cors())
app.use(express.json())

app.use('/', Router)
app.post('/user/create', cors())

app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})