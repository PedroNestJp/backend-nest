require('dotenv').config()

const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()
const cors=require("cors");


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

app.use(express.json())
app.use(cors(corsOptions)) // Use this after the variable declaration

const userRoutes = require('./src/routes/userRoutes')
const userPjRoutes = require('./src/routes/userPjRoutes')
const productsRoutes = require('./src/routes/productsRoutes')

app.use(userRoutes)
app.use(userPjRoutes)
app.use(productsRoutes)

app.get ('/teste', (req, res)=> {
    res.send("Hi Pangola")
})

app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})