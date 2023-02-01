const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors");
const Router = require('./src/routes/routes');
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL
import "./cors.config"

app.use(cors())

app.use(express.json())
app.use('/', Router)

app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})