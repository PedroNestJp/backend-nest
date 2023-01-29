require('dotenv').config()
const express = require('express')
const cors = require("cors");
const Router = require('./src/routes/routes');
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://bar.other/doc");
xhr.setRequestHeader("X-PINGOTHER", "pingpong");
xhr.setRequestHeader("Content-Type", "text/xml");
xhr.onreadystatechange = handler;
xhr.send("<person><name>Arun</name></person>");

app.use(express.json())
app.use(cors())

app.use('/', Router)


app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})