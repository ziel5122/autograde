/*
    *File: DockerSandboxMin.js
    *Author: Austin Zielinski
    *Created: 9th Feb 2017
*/

var exec = require('child_process').exec;
var fs = require('fs');

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

var DockerSandboxMin = function(vm_name, wdir, folder, hw_num, hw_type, content, timeout) {
	this.vm_name = vm_name;
	this.wdir = wdir;
	this.folder = folder;

	this.hw_num = hw_num;
	this.hw_type = hw_type;
	this.content = content;	

	this.timeout = timeout;
}

/**
    * @function
    * @name DockerSandboxMin.run
    * @description Function that prepares the Docker environment then executes
    * @param {Function pointer} success ?????
*/

DockerSandboxMin.prototype.run = function(success) {
    
    this.prepare(function() {
        //this.execute(success);
    });
}

/**
         * @function
         * @name DockerSandboxMin.prepare
         * @description Function that creates a directory with the folder name already provided through constructor
         * and then copies contents of folder named Payload to the created folder, this newly created folder will be mounted
         * on the Docker Container. A file with the name specified in file_name variable of this class is created and all the
         * code written in 'code' variable of this class is copied into this file.
         * Summary: This function produces a folder that contains the source file and 2 scripts, this folder is mounted to our
         * Docker container when we run it.
         * @param {Function pointer} success ?????
*/

DockerSandboxMin.prototype.prepare = function(success) {
    console.log('\nPREPARING');

	//make folder for user content
	exec('mkdir ' + this.wdir + this.folder, (err) => {
		if (err) console.error(err); //'error making directory ' + this.wdir + this.folder);
		else {
			console.log('* mkdir ' + this.wdir + this.folder);

			//copy scripts to new folder
			exec('cp ' + this.wdir + '/Payload/* ' + this.wdir + this.folder, (err) => {
				if (err) console.error('error copying payload to new folder');
				else {
					console.log('* cp ' + this.wdir + '/Payload/* ' + this.wdir + this.folder);

					//give all permission on new folder
					exec('chmod 777 ' + this.wdir + this.folder, (err) => {
						if (err) console.error('error changing permissions on ' + this.wdir + this.folder);
						else {
							console.log('* chmod 777 ' + this.wdir + this.folder);

							//write content to file
							fs.writeFile(this.wdir + this.folder + '/file', this.content, (err) => {
								if (err) console.error('error writing user content file');
								else {
									console.log('* user content file saved');
									success();
								}
							});
						}
					});
				}
			});
		}
	});
}

/**
         * @function
         * @name DockerSandboxMin.execute
         * @precondition: DockerSandbox.prepare() has successfully completed
         * @description: This function takes the newly created folder prepared by DockerSandbox.prepare() and spawns a Docker container
         * with the folder mounted inside the container with the name '/usercode/' and calls the script.sh file present in that folder
         * to carry out the compilation. The Sandbox is spawned ASYNCHRONOUSLY and is supervised for a timeout limit specified in timeout_limit
         * variable in this class. This function keeps checking for the file "Completed" until the file is created by script.sh or the timeout occurs
         * In case of timeout an error message is returned back, otherwise the contents of the file (which could be the program output or log of
         * compilation error) is returned. In the end the function deletes the temporary folder and exits
         *
         * Summary: Run the Docker container and execute script.sh inside it. Return the output generated and delete the mounted folder
         *
         * @param {Function pointer} success ?????
*/

DockerSandboxMin.prototype.execute = function() {
    var exec = require('child_process').exec;
    var fs = require('fs');
    var myC = 0; //variable for timeout

    //statement to be executed
    var st = this.path + 'DockerTimeout.sh ' + this.timeout +
        's -e \'NODE_PATH=/usr/local/lib/node_modules\' -i -t -v "' + this.path +
        this.folder + '":/usercode ' + this.vm_name + ' /usercode/script.sh ' +
        this.compiler + ' ' + this.fname + ' args ' + this.xargs;

    //print satement to console
    console.log(st);

    //execute the Docker; this is done ASYNCHRONOUSLY
    exec(st);
    console.log('-------------------------------');

    //Check For File named "completed" after every 1 second
    var intid = setInterval(function() {
            //Displaying the checking message after 1 second interval, testing purposes only
            console.log("Checking " + this.path+this.folder + ": for completion: " + myC);
            myC = myC + 1;

            fs.readFile(this.path + this.folder + '/completed', 'utf8', function(err, data) {
                //if file is not available yet and the file interval is not yet up carry on
                if (err && myC < this.timeout_value) {
                    //console.log(err);
                    return;
                }
                //if file is found simply display a message and proceed
                else if (myC < this.timeout_value) {
                    console.log("DONE");
                    //check for possible errors
                    fs.readFile(this.path + this.folder + '/errors', 'utf8', function(err2, data2) {
                    	if (!data2) data2 = "";
                   		console.log("Error file: ");
                   		console.log(data2);

                   		console.log("Main File");
                   		console.log(data);

            			var lines = data.toString().split('*-COMPILEBOX::ENDOFOUTPUT-*');
            			data = lines[0];
            			var time = lines[1];

            			console.log("Time: ");
            			console.log(time);

           	           	success(data,time,data2);
                    });

                    //return the data to the calling function
                }
                //if time is up. Save an error message to the data variable
                else {
                	//Since the time is up, we take the partial output and return it.
                	fs.readFile(this.path + this.folder + '/logfile.txt', 'utf8', function(err, data) {
                		if (!data) data = "";
                        data += "\nExecution Timed Out";
                        console.log("Timed Out: " + this.folder + " " + this.langName);
                        fs.readFile(this.path + this.folder + '/errors', 'utf8', function(err2, data2) {
    	                	if(!data2) data2 = "";

            				var lines = data.toString().split('*---*');
            				data = lines[0];
            				var time = lines[1];

            				console.log("Time: ");
            				console.log(time);

    	                   	success(data, data2);
    	                });
                	});
                }

            //now remove the temporary directory
            console.log("ATTEMPTING TO REMOVE: " + this.folder);
            console.log("------------------------------")
            exec("rm -r " + this.folder);

            clearInterval(intid);
        });
    }, 1000);
}

module.exports = DockerSandboxMin;
