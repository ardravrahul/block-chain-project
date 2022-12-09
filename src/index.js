const express = require("express");
const route = require("../block-chain-project/controller/controller")
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://rahulverma:7mrfqlOY99a4Uu80@cluster0.jlhp9fn.mongodb.net/rahul2514-DB?retryWrites=true&w=majority",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("listening at " + (process.env.PORT || 3000));
});




