//server.js
//Packages installed: axios, cheerio, express, mongoose
const express = require('express')
const app = express()
const {join} = require('path')

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
