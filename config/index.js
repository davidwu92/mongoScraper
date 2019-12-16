//config/index.js
//later when we deploy, we'll change the url to something from the .env file

module.exports = require('mongoose')
  .connect("mongodb://localhost/mongoHeadlines", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOMEWORK INSTRUCTIONS FOR DEPLOYMENT:
// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoose.connect(MONGODB_URI);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
