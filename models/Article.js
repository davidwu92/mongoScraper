//model/Article.js
//building Schema for an Article (Just an initial model, may be deleted)

module.exports = (model, Schema) => {
  const Article = new Schema({
    headline: String,
    summary: String,
    url: String,
    isSaved: Boolean,
  //each Article has many comments. 
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    },
    {timestamps: {createdAt: "scrapeDate", updatedAt: "scrapeUpdate"}}
    )

  return model('Article', Article)
}