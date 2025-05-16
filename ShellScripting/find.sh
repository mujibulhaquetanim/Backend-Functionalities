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

# find files that modified in last 7 days
echo -e "\n---find files that modified in last 7 days---"
find . -type f -mtime -7
# older than 30 days
echo -e "\n---find files that modified in last 30 days---"
find . -type f -mtime +30

# search file with specific permission
echo -e "\n---search file with specific permission---"
find . -type f -perm 644

# find empty directories
echo -e "\n---find empty directories---"
find . -type d -empty
find . -type f -empty # find empty files

# search at least two level depth
echo -e "\n---search at least two level depth---"
find . -mindepth 2 -type f

#