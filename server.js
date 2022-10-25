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
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB CONNECTION SUCCESS");
  });

app.listen(process.env.PORT || 5000, function () {
  console.log("Server running at port 5000");
});
