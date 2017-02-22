## What is it? ##

autograde is a *Docker* based sandbox to run untrusted student code, and return to them whether or not they've passed the test cases for a given assignment. The code is based on [CompileBox](https://github.com/remoteinterview/compilebox), which also has an HTML->NodeJS->Docker architecture. The backend runs bash scripts in a Docker container, so you can do anything you could do in bash with the proper installations on your Docker virtual machine.

## Why is it needed? ##

autograde was developed for [Dr. Glenn Bruns](https://csumb.edu/directory/people/glenn-bruns) of CSUMB (California State Univeristy, Monterey Bay) in order to automate grading of student code safely, and provide an environment safe from fork bombs and common coding mistakes in Operating Systems class.
 
## How does it work? ##

The client-side app submits the code and information about the assignment to the server. The server then copies the appropriate grading script and wrapper into the Docker instance, and passes the code to the grading script as an argument. 

Docker instances use "crypto-safe" randomly generated folder names, so that they don't access each other's files, and the folders are deleted following execution.

Docker instances are run asynchronously.

## Installation Instructions ##

* Navigate to the setup directory
* Execute either sudo ./Install_16.04.sh or ./Install_Cent6.sh as root
    
    ## Supported Operating Systems ##
    autograde has been successfully installed on the following operating systems, but could easily be configured on most 	Linux distributions:
    - Ubuntu 16.04 LTS
    - CentOS 6 (root required)
    
## Configuring Docker ##

The app supports anything you can install on Ubuntu (Docker runs Ubuntu 14.04), so configuring your needs are a matter of configuring the virtual machine properly in the Dockerfile
