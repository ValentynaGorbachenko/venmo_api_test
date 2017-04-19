// server.js
"use strict";
const http = require("http"),
	port = 3000,
	hostname = '127.0.0.1',
	server = http.createServer((req, res)=>{
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		
		res.end("Hello Venmo API");
	});
server.listen(port, hostname, ()=>{
	console.log(`Server is running on ${hostname}:${port}`);
})