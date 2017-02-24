#!/bin/bash

gcc -o file $1

1> easy.txt

./file << LIST
ls -l > temp.txt
sort < temp.txt
cd var 
pwd
LIST

1> hard.txt

./file << LIST
sort < temp.txt > temp-sorted.txt
ls -l >< foo.txt
LIST

1> /dev/tty

diff easy.txt easy.sol
echo
diff hard.txt hard.sol
