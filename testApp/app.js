// const http = require("http");
// const mustache = require("mustache");
// const randomNum = require("./randomnumber");

// var message = mustache.render("Hello {{firstname}} {{lastname}}, how are you today?", {firstname:"Joseph", lastname:"Sepulveda"});

// // Handle Incoming HTTP Requests
// function reqHandler(req, res) {
// 	console.log("We have a server request from " + req.url);
// 	if (req.url === "/") {
// 		res.end("Welcome To My Homepage");
// 	} else if (req.url === "/about") {
// 		res.end("This Is The about Page");
// 	} else if (req.url === "/contact") {
// 		res.end(message + randomNum());
// 	} else {
// 		res.end("Page Not Found");
// 	}

// }

// // Create And Start Server
// var server = http.createServer(reqHandler);
// server.listen(3000);

const http = require("http");
const mustache = require("mustache");
const randomNum = require("./randomnumber");

const template = "<h1>Joseph Sepulveda</h1><h3>{{pagename}}</h3><p>{{data}}</p>"

class Dictionary {
	constructor() {
		this.values = {};
	}

	Add(key, value) {
		this.values[key] = value;
	}

	Get(key) {
		return this.values[key];
	}
}

class Page {
	constructor(name, data) {
		this.name = name;
		this.data = data;
	}

	GetName() {
		return this.name;
	}

	GetData() {
		return this.data;
	}
}

var pages = new Dictionary();
pages.Add("/home", new Page("HOME", "Welcome To My Homepage"));
pages.Add("/about", new Page("ABOUT", "I AM JOSEPH!!!"));
pages.Add("/404", new Page("404", "Page Not Found"));
pages.Add("/hello%20mike", new Page("DICTIONARY", "Guess What I Just Used"));

// Handle Incoming HTTP Requests
function reqHandler(req, res) {
	var currPage = pages.Get(req.url);
	if (currPage != null) {
		var message = mustache.render(template, {pagename:currPage.GetName(), data:currPage.GetData()});
		res.end(message);
	} else res.end("404");
}

// Create And Start Server
var server = http.createServer(reqHandler).listen(3000);