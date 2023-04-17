const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const APP_URL = process.env.APP_URL
const Routes = require('./src/routes/routes');
const cors = require('cors');

app.use(
    cors({
      origin: "*",
    })
  );
app.use(express.json());

app.use('/', Routes )

app.listen (PORT || 8000, () => {
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})