"use strict";
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.get("/check1", (req, res) => {
  res.send("Hello World!");
});

server.setTimeout(5 * 60 * 1000);

app.get("/c", (req, res) => {
  res.send("Working fine!");
});

server.listen(3000, () => {
  console.log("App Is Running On 3000.");
});