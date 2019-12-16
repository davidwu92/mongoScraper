//routes/index.js

module.exports = app => {
  require('./articleRoutes')(app) //uncertain if keeping route
  
  //any additional models will need routes required here.

}