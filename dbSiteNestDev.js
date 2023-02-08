require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()
const Router = require('./src/routes/routes');
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

module.exports = {
    async headers() {
        return [
          {
            // matching all API routes
            source: '/:path*',
            headers: [
              { key: 'Access-Control-Allow-Credentials', value: 'true' },
              { key: 'Access-Control-Allow-Origin', value: '*' },
              { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
              { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
            ],
          },
        ];
      },

}

app.use(express.json())
app.use(cors())
app.use('/', Router)

app.post('/user/create', cors()) // enable pre-flight request for DELETE request
app.post('/user/create', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen (process.env.PORT || 8000, ()=>{
    console.log(`✔ service run on address ${APP_URL} at the port: ${PORT}`)
})