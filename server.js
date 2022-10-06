const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB CONNECTION SUCCESS");
  });

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must input a name"],
    unique: true,
  },
  posts: {
    type: String,
    required: [true, "A post is required"],
  },
});

const Post = mongoose.model("Post", postsSchema);

/* const testPost = new Post({
  title: "Day 3",
  posts: "today was a slightly better day!",
}); */

/* testPost
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log("error found", err);
  }); */

Post.deleteOne({ _id: "633ea89b8b25ad0b482dfb1b" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("nicely done");
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running at port 3000");
});
