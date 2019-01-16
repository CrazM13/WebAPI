const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();

// Home Page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

// About Page
router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});

// Contact Page
router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/contact.html'));
});

// Set Up Server
app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Running On Port 3000");
