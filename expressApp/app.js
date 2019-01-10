const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));


