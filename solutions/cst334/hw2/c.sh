#!/bin/bash

gcc -o /usercode/bindec $1 -lm
/usercode/bindec << LIST
hello
hello my name is Jason
2017 *2017

exit123
exit
LIST
