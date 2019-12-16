//routes/index.js

module.exports = app => {
  require('./articleRoutes.js')(app) //uncertain if keeping route
  require('./commentRoutes.js')(app)
  //any additional models will need routes required here.
  
}