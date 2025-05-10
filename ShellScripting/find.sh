#!bin/bash

# find command expression `find [path] [options] [expression]`

# find file in the current directory, -name is for file name
echo -e "\n---find file in the current directory---"
find . -type f -name "*.txt"

# using or expression
# find . -type f -name "*.txt" -o -name "*.log"
# alternative way
echo -e "\n---using or expression---"
find . -type f \( -name "*.txt" -o -name "*.log" \)

# search by file size and greater than 1kb or 1024 bytes, for kb use k, for bytes use c
echo -e "\n---search by file size---"
find . -type f -size +1024c