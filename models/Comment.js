//models/Comment.js
//we'll want to be able to store commends for each article scraped.

module.exports = (model, Schema) =>{
  const Comment = new Schema({
    text: String,
    //each comment belongs to an article.
    parent: {type: Schema.Types.ObjectId, ref:'Article'}
  })

  return model('Comment', Comment)
}