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
    default: "nothing was received",
  },
});

const Post = mongoose.model("Post", postsSchema);

const testPost = new Post({
  title: "Day 2",
  posts: "today was a better day!",
});

testPost
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log("error found", err);
  });

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running at port 3000");
});
