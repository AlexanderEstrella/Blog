const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//dotenv.config({ path: "./config.env" });

//const DB = process.env.DATABASE;

/* mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB CONNECTION SUCCESS");
  });
<<<<<<< HEAD
=======
/* const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must input a tittle"],
    unique: true,
  },
  posts: {
    type: String,
    required: [true, "A post is required"],
  },
//});

//const personSchema = mongoose.Schema({
 // name: {
  //  type: String,
   // required: [true, "must input a name"],
 // },
 // favoritepost: postsSchema,
//});

//const Person = mongoose.model("Person", personSchema);

//const Post = mongoose.model("Post", postsSchema);

/* const testPost = new Post({
  title: "Day 3",
  posts: "today was a slightly better day!",
}); */
//const testpost = new Post({
 // name: "day 7",
 // posts: "new things",
//});

//Person.updateOne({ name: "alex" }, { favoritepost: testpost }, function (err) {
  //if (err) {
   // console.log("error" + err);
 // }
//});
>>>>>>> b0e24da22dd1edc3c0622353b61331a6399fa210

app.listen(process.env.PORT || 5000, function () {
  console.log("Server running at port 5000");
});
