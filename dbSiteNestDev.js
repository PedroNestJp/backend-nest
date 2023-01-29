require('dotenv').config()

const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

const cors = require("cors");

const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

app.use(express.json())

const userRoutes = require('./src/routes/userRoutes')
const userPjRoutes = require('./src/routes/userPjRoutes')
const productsRoutes = require('./src/routes/productsRoutes')

app.use(cors())

app.use(userRoutes)
app.use(userPjRoutes)
app.use(productsRoutes)

app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})