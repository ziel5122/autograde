/*
        *File: app.js
        *Author: Asad Memon / Osman Ali Mian
        *Last Modified: 5th June 2014
        *Revised on: 30th June 2014 (Introduced Express-Brute for Bruteforce protection)
*/

//packages
var exec = require('child_process').exec;
var jsdiff = require('diff');
var express = require('express');
var ExpressBrute = require('express-brute');
var fs = require('fs');

//local js files
var arr = require('./compilers');
var sandBox = require('./DockerSandbox');
var sandBoxMin = require('./DockerSandboxMin');

//create server on port (port)
var app = express.createServer();
var port = 80;

var store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
var bruteforce = new ExpressBrute(store,
    {
        freeRetries: 50,
        lifetime: 3600
    }
);

app.use(express.static(__dirname));
app.use(express.bodyParser());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

function gradeWritten(answers, hw_num, wdir, folder) {
    exec(wdir + '../solutions/hw' + hw_num + '/written.sh ' + wdir + folder + '/file', (error, stdout, stderr) => {
	return {output: stdout};
    });
}

function random(size) {
    //returns a crypto-safe random
    return require("crypto").randomBytes(size).toString('hex');
}


app.post('/grade', bruteforce.prevent, function(req, res) {
    var type = req.body.type
    var content = req.body.content;
    var hw_num = req.body.hw_num;
  
    var wdir = __dirname + "/"; //current working path
    var folder = 'temp/' + random(10); //folder in which the temporary file will be saved
    
    fs.writeFile(wdir + folder + '/file', content, (err) => {
	if (err) {
	     //console.error('error writing file: ' + err);
	     //res.send({output: err});
	}
    });

    if (type == 'written') {
	res.send(gradeWritten(hw_num, wdir, folder));
    }

    /*
    var vm_name = 'virtual_machine'; //name of virtual machine that we want to execute
    var timeout_value = 20; //Timeout Value, In Seconds
    */

    /*
    //details of this are present in DockerSandbox.js
    var sandboxType = new sandBox(
        timeout_value,
        path,
        folder,
        vm_name,
        arr.compilerArray[language][0],
        arr.compilerArray[language][1],
        code,
        arr.compilerArray[language][2],
        arr.compilerArray[language][3],
        arr.compilerArray[language][4],
        stdin
    );
    */

    /*
    var sandboxType = new sandBoxMin(
        timeout_value,
        folder,
        'C',
        code,
        ''
    );

    //data will contain the output of the compiled/interpreted code
    //the result maybe normal program output, list of error messages or a Timeout error
    sandboxType.run(function(data, exec_time, err) {
        //old res.send();
        //res.send({output:data, langid: language,code:code, errors:err, time:exec_time});
    	res.send({output:1, langid:language, code:code, errors:err, time:exec_time});
	});
    */
});

app.post('/written', bruteforce.prevent, function(req, res) {
	res.send({output:0});
});

app.get('/', function(req, res) {
    res.sendfile("./index.html");
});

console.log("Listening at " + port)
app.listen(port);
