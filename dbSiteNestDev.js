const express = require('express')
const app = express()
require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const userRoutes = require('./src/routes/userRoutes')
const userPjRoutes = require('./src/routes/userPjRoutes')
const productsRoutes = require('./src/routes/productsRoutes')
const cors = require('cors')
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }

app.use(express.json())
app.use(cors())

app.use(userRoutes)
app.use(userPjRoutes)
app.use(productsRoutes)

app.get ('/home', (req, res)=> {
    res.send("Hi Pedro")
})
app.get ('/teste', (req, res)=> {
    res.send("Hi Pangola")
})

app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})