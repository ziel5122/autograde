/*
        *File: app.js
        *Author: Asad Memon / Osman Ali Mian (Modified by Austin Zielinski)
        *Last Modified: 18th Feb 2014
        *Revised on: 30th June 2014 (Introduced Express-Brute for Bruteforce protection)
*/

//packages
var bodyParser = require('body-parser');
var express = require('express');
var ExpressBrute = require('express-brute');
var fs = require('fs');
var path = require('path');

//local js files
var sandBox = require('./DockerSandbox');

//create server on port (port)
var app = express();
var port = process.env.PORT || 3000;

var store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
var bruteforce = new ExpressBrute(store);

app.use(express.static(__dirname + '/../../public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});
*/

function random(size) {
    //returns a crypto-safe random
    return require("crypto").randomBytes(size).toString('hex');
}


app.post('/grade', bruteforce.prevent, function(req, res) {
  var hw_type = req.body.type
  var content = req.body.content;
  var hw_num = req.body.hw_num;
  var class_code = req.body.class_code;

  var wdir = __dirname + "/"; //current working path
  var folder = '../../temp/' + random(10); //folder in which the temporary file will be saved
	var vm_name = 'virtual_machine';
	var timeout = 200;

	var sandbox = new sandBox(
		vm_name,
		wdir,
		folder,
    class_code,
		hw_num,
		hw_type,
		content,
		timeout
	);

	sandbox.run((data, time, err) => {
		res.send({output: data, errors: err, time: time});
	});
});

/*
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
});
*/

console.log("Listening at " + port)
app.listen(port);
