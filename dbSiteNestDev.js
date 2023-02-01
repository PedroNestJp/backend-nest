const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors");
const Router = require('./src/routes/routes');
const PORT = process.env.PORT
// const APP_URL = process.env.APP_URL

app.use(cors())
app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      "*"
    ); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json())
app.use(Router)

app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})