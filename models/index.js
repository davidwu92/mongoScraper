//models/index.js

const {model, Schema} = require('mongoose')

//Whenever a model is created, don't forget to require and export here.
const Article = require('./Article.js')(model, Schema)

module.exports = {Article}