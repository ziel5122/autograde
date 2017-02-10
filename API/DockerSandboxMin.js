/*
    *File: DockerSandboxMin.js
    *Author: Austin Zielinski
    *Created: 9th Feb 2017
*/

/**
    * @Constructor
    * @variable DockerSandboxMin
    * @description
    * @param {Number} timeout: timeout limit for code execution in Docker
    * @param {String} folder: name of folder that would be mounted/shared with Docker
    * @param {String} compiler: compiler/interpreter to use
    * @param {String} code: the actual code
    * @param {String} xargs: extra arguments for compilation
*/

var path = __dirname + "/";
var vm_name = "virtual_machine";

var DockerSandboxMin = function(timeout, folder, lang, code, xargs) {
    this.timeout = timeout;
    this.path = path;
    this.folder = folder;
    this.vm_name = vm_name;
    this.code = code;
    this.lang = lang;
    this.xargs = xargs;

    switch (lang) {
        case "C":
            this.compiler = "gcc";
            this.file = "file.c";
            break;
        case "bash":
            this.compiler = "bash";
            this.file = "file.sh";
            break;
    }
}

/**
    * @function
    * @name DockerSandbox.run
    * @description Function that prepares the Docker environment then executes
    * @param {Function pointer} success ?????
*/

DockerSanbox.prototype.run = function(success) {
    var sandbox = this;

    this.prepare(function() {
        //sandbox.execute(success);
    });
}

execHandler = function(error, stdout, stderr) {
    if (error) {
        console.error('exec error: ${error}');
        process.exit(1);
    }
    console.log('stdout: ${stdout}');
    console.log('stderr: ${stderr}');
}

/**
         * @function
         * @name DockerSandbox.prepare
         * @description Function that creates a directory with the folder name already provided through constructor
         * and then copies contents of folder named Payload to the created folder, this newly created folder will be mounted
         * on the Docker Container. A file with the name specified in file_name variable of this class is created and all the
         * code written in 'code' variable of this class is copied into this file.
         * Summary: This function produces a folder that contains the source file and 2 scripts, this folder is mounted to our
         * Docker container when we run it.
         * @param {Function pointer} success ?????
*/

DockerSandbox.prototype.prepare = function(success) {
    var exec = require('child_process').exec;
    var fs = require('fs');

    //create the folder to copy 'code' into
    exec('mkdir ' + this.path + this.folder, execHandler);

    //copy scripts to new folder
    exec("cp " + this.path + "/Payload/* " + this.path + this.folder, execHandler);

    //give all permissions on new folder
    exec("chmod 777 " + this.path + this.folder, execHandler);

    fs.writeFile(this.path + this.folder + "/" + this.file, this.code, (error) => {
        if (error) {
            console.error('error writing file: ${error}');
        } else {
            console.log('${this.lang} file was saved');
            exec('chmod 777 ' + sandbox.path +sandbox.folder + '/' + sandbox.file, execHandler);

            fs.writeFile(this.path + this.folder + '/inputFile', this.)

            fs.writeFile(sandbox.path + sandbox.folder+"/inputFile", sandbox.stdin_data,function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Input file was saved!");
                    success();
                }
            });
        }
    });
}
