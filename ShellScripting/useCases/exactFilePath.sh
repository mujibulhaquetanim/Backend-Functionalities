#!bin/bash

FILE="${PWD}/useCases/readFileUsingLoop/readFile.txt"

echo "File Name is:" $(basename $FILE)
echo "File Path is:" $(dirname $FILE)
echo "File Full Path is:" $(realpath readFile.txt)