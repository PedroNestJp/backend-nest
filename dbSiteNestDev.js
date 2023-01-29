require('dotenv').config()

const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

const cors = require("cors");

const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

app.use(express.json())
app.use(cors())

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

const userRoutes = require('./src/routes/userRoutes')
const userPjRoutes = require('./src/routes/userPjRoutes')
const productsRoutes = require('./src/routes/productsRoutes')


app.use(userRoutes)
app.use(userPjRoutes)
app.use(productsRoutes)

app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})