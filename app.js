//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const { parentPort } = require("worker_threads");

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  post: {
    type: String,
  },
});

const Post = mongoose.model("Post", postsSchema);

const app = express();
// Sets up the Express app to handle data parsing
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//Rendering arrray to home.ejs
app.get("/", (req, res) => {
  Post.find({}, function (err, foundpost) {
    res.render("home", {
      startingContent: homeStartingContent,
      posts: foundpost,
    });
  });
});

// passing a variables to about page
app.get("/about", (req, res) => {
  res.render("about", {
    about: aboutContent,
  });
});
// passing a variables to contact page
app.get("/contact", (req, res) => {
  res.render("contact", {
    contact: contactContent,
  });
});
// passing path to compose page.
app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});
// redirecting posts to home page
app.post("/compose", (req, res) => {
  const Newpost = new Post({
    title: req.body.fname,
    post: req.body.areat,
  });
  Newpost.save(function (err, results) {
    if (err) {
      res.redirect("/");
    } else {
      posts.push(results);
    }
  });
  res.redirect("/");
});

// using lodash to allow uses to search using the browser bar with almost any specials and be able to render the posts.
app.get("/posts/:any", (req, res) => {
  const ovar = _.lowerCase(req.params.any);

  posts.forEach(function (post) {
    const Sparams = _.lowerCase(post.title);

    if (ovar === Sparams) {
      res.render("post", {
        title: post.title,
        content: post.post,
      });
    }
  });
});

module.exports = app;
