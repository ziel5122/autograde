#!/bin/bash

#grading script passed as arg
script=$1
#student file passed as arg
file=$2

#redirect stdout to logfile.txt and stderr to errors
exec  2> $"/usercode/errors"

#begin timer
START=$(date +%s.%2N)

$1 $2

exec  1> $"/usercode/logfile.txt"
diff -ws /usercode/hw5.sol /usercode/logfile2.txt

#end timer
END=$(date +%s.%2N)
#calculate runtime
runtime=$(echo "$END - $START" | bc)

echo "EXECUTION COMPLETE" $runtime

#change name of logfile so NodeJS can find it
mv /usercode/logfile.txt /usercode/completed
