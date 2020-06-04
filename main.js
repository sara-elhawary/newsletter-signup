const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send("I have done it by myself");
});
app.listen(3000, function () {
  console.log("server is running at port 3000");
});
