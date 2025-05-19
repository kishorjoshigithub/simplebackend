const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 4000;

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login to your account</h1>");
});

//Server listening
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
