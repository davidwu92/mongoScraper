//model/Article.js
//building Schema for an Article (Just an initial model, may be deleted)

module.exports = (model, Schema) => {
  const Article = new Schema({
    title = String,
    author = String,
    content = String,
    dateWritten = Date,
  }, {timestamps: {createdAt: "scrapeDate", updatedAt: "scrapeUpdate"}}),

  return model('Article', Article)
}