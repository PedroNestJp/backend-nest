const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const APP_URL = process.env.APP_URL
const cors = require('cors');
const Routes = require('./src/routes/routes');


app.use(express.json());

app.use(cors());

app.set('Access-Control-Allow-Origin', '*')
app.use('/', Routes )


app.listen (PORT || 8000, () => {
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})