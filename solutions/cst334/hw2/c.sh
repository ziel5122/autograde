#!/bin/bash

gcc -o /usercode/bindec $1 -lm
/usercode/bindec << LIST
ls
pwd
ls
pwd
exit
LIST
