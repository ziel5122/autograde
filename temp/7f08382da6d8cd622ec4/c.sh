#!/bin/bash

gcc -o /usercode/bindec $1 -lm
/usercode/bindec << LIST
ls
pwd
ls -l
exit
LIST
