// server.js
"use strict";
const http = require("http"),
	port = 3000,
	hostname = "127.0.0.1",
	fs = require("fs"),
	path = require("path"),
	server = http.createServer((req, res)=>{
		console.log(req.url);
		// simple example with statusCode property and setHeader method
		// res.statusCode = 200;
		// res.setHeader('Content-Type', 'text/plain');
		// res.end("Hello Venmo API");

		// simple example with writeHeader method
		// res.writeHeader(200, {'Content-Type': 'text/plain'});
		// res.end(res.statusCode.toString());

		if (req.url === "/"){
			fs.stat("client/views/index.html", (err, stats) =>{
				// console.log(err);
				if (err) throw err;
				// console.log(stats);
				fs.readFile("client/views/index.html", "utf8", (err, data)=>{
					// console.log(err);
					if (err) throw err;
					// console.log(data);
					res.writeHeader(200, {'Content-Type': 'text/html'});
					res.write(data);
					res.end();
				});
			});
			
		} else if (req.url === "/assets/css/style.css") {
        fs.readFile('assets/css/style.css', 'utf8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(data); 
            res.end();
        });
    }  else if (req.url === "/bower_components/jquery/dist/jquery.min.js") {
        fs.readFile('bower_components/jquery/dist/jquery.min.js', 'utf8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-type': 'text/javascript'});
            res.write(data); 
            res.end();
        });
    } else {
    	res.writeHead(404);
    	res.end('File not found!!!');
    }
	});
server.listen(port, hostname, ()=>{
	console.log(`Server is running on ${hostname}:${port}`);
});	
// "/favicon.ico"