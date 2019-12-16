//server.js
const express = require('express')
const app = express()
const {join} = require('path')

//middleware
app.use(express.static(join(__dirname, 'public')))
