const http = require("http");
const mustache = require("mustache");
const randomNum = require("./randomnumber");

var message = mustache.render("Hello {{firstname}} {{lastname}}, how are you today?", {firstname:"Joseph", lastname:"Sepulveda"});

// Handle Incoming HTTP Requests
function reqHandler(req, res) {
	console.log("We have a server request from " + req.url);
	if (req.url === "/") {
		res.end("Welcome To My Homepage");
	} else if (req.url === "/about") {
		res.end("This Is The about Page");
	} else if (req.url === "/contact") {
		res.end(message + randomNum());
	} else {
		res.end("Page Not Found");
	}
}

// Create And Start Server
var server = http.createServer(reqHandler);
server.listen(3000);