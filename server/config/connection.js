const mongoose = require('mongoose');

mongoose
.connect(
  "mongodb+srv://randolphrichard:Awesome@whichbook.51jpl.mongodb.net/googlebooks?retryWrites=true&w=majority",
  // process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
