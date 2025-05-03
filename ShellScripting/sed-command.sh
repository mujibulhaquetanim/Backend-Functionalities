#!bin/bash

# read a specific line (1st line) from a file
sed -n '1p' "./useCases/readFileUsingLoop/readFile.txt"

# read the last line from a file
sed -n '$p' "./useCases/readFileUsingLoop/readFile.txt"

# show line in a given range
sed -n '2,3p' "./useCases/readFileUsingLoop/readFile.txt"