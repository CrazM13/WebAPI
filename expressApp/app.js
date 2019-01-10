const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

app.set("views", path.resolve(__dirname, "views"));

app.get("/", function(req, res) {
    res.render("index.html");
});

http.createServer(app).listen(3000, function() {
    console.log("Server Running On Port 3000");
});
