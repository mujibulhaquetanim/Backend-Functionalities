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

# find and mv to new directory, `{}` acts as a placeholder for each found file. `mv {}` moves the found file to `./files` and `\;` marks the end of the command.
echo -e "\n---find and mv to new directory---"
# find . -type f -name "*.txt" -exec mv {} ./files \; # didn't excute the command in terminal

# find and delete files
echo -e "\n---find and delete files---"
find /home/haq -type f -name "*.tmp"
# another way it will show prompt, The -i flag prompts before deleting each file.
find /home/haq -type f -name "*.tmp" -exec rm -i {} \;
