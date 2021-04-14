const express = require("express");
const app = express();
app.use(express.json())
 
app.get("/", (req, res) => {
   res.status(200).send("Welcome to our page!")
})
 
// anyone who imports this file will be able to use the "app" variable
module.exports = app