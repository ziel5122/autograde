#!/bin/bash

cd /code
gcc student_src.c -o student_exe 2>&1
ls
./student_exe
