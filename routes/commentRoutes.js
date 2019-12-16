//routes/commentRoutes

const {Comment, Article} = require('../models')

module.exports = app => {
  //GET all comments
  app.get('/comments', (req, res) =>{
    Comment.find()
      .then(comments => {
        res.json(comments)
      })
      .catch(e => console.error(e))
  })

  //POST one article
  app.get('/comments', (req, res) =>{
    Comment.create(req.body)
      .then(({_id})=>{
        console.log(_id)
        //some kinda article logic goes here? -David
        Article.updateOne({_id:req.body.parent}, {$push: {comments:_id}})
          .then(()=>res.sendStatus(200))
      })
      .catch(e => console.error(e))
  })

  //DELETE one article
  app.delete('/comments/:id', (req, res) =>{
    Comment.deleteOne({_id: req.params.id})
    .then(()=>{
      res.sendStatus(200)
    })
    .catch(e=>console.error(e))
  })
}