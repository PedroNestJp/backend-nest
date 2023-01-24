const express = require('express')
const app = express()
require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const userRoutes = require('./src/routes/userRoutes')
const userPjRoutes = require('./src/routes/userPjRoutes')
const productsRoutes = require('./src/routes/productsRoutes')
const path = require('path')
const cors = require('cors')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.use(express.json())
app.use(cors())

app.use(userRoutes)
app.use(userPjRoutes)
app.use(productsRoutes)

app.get ('/home', (req, res)=> {
    res.send("Hi Pedro")
})
app.get ('/teste', (req, res)=> {
    res.send("Hi Pedro")
})

app.listen (port, ()=>{
    console.log(`✔ serviço rodando em: ${port}`)
})