//server.js
//Packages installed: axios, cheerio, express, mongoose
const express = require('express')
const {join} = require('path')
const app = express()

//middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//bring in routes
require('./routes')(app)

//listen once connection is open
require('mongoose')
  .connection
  .once('open', ()=>app.listen(3000))
