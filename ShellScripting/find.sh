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

# find files that created in last 7 days
echo -e "\n---find files that created in last 7 days---"
find . -type f -ctime -7

# find and list all recently accessed files
echo -e "\n---find and list all recently accessed files---"
find . -type f -atime -7

# delete file interactively with yes/no prompt
echo -e "\n---delete file interactively with yes/no prompt---"
find . -type f -name "*.txt" -exec rm -i {} \;

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

# find and tar, The -T option tells tar to take the list of files from standard input (- refers to input from the pipe).
echo -e "\n---find and tar---"
find . -type f -name "*.txt" | tar -cvf archive.tar -T -

# search all the hidden files in a directory
echo -e "\n---search all the hidden files in a directory---"
find . -type f -name ".*"

# find all the files owned by a specific user
echo -e "\n---find all the files owned by a specific user---"
find . -type f -user haq

# Finding & Running a Command for Each File
echo -e "\n---Finding & Running a Command for Each File---"
find . -type f -name "*.png" -exec convert {} -resize 800x600 {} \;

# find all .sh files and make them executable
echo -e "\n---find all .sh files and make them executable---"
find . -type f -name "*.sh" -exec chmod +x {} \;

