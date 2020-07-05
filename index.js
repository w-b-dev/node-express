"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// handler
app.get("/", (request, response) => {
  response.send("Welcome to my API");
});
// Start listening
app.listen(port, () => console.info("Start listening"));
