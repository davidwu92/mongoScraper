//routes/articleRoutes

const {Article} = require('../models')

module.exports = app => {
  //GET all articles
  app.get('/articles', (req, res) =>{
    Article.find()
      .then(articles => {
        //just serve up articles to front end (I think) -David
        res.json(articles)
      })
      .catch(e => console.error(e))
  })

  //POST one article
  app.post('/articles', (req, res) =>{
    Article.create(req.body)
      .then(()=>{
        //some kinda article logic goes here? -David
        res.sendStatus(200)
      })
      .catch(e => console.error(e))
  })

  //DELETE one article
  app.delete('/articles/:id', (req, res) =>{
    Article.deleteOne({_id: req.params.id})
    .then(()=>{
      res.sendStatus(200)
    })
    .catch(e=>console.error(e))
  })
}