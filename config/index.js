//config/index.js
//scraperdb
//later when we deploy, we'll change the url to something from the .env file

module.exports = require('mongoose')
  .connect('mondodb://localhost/scraperdb', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
