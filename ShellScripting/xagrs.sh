#!bin/bash

FILE1="${PWD}/useCases/readFileUsingLoop/readFile.txt"
FILE2="${PWD}/useCases/readFileUsingLoop/readFile.csv"
FILE3="${PWD}/tr-output.txt"

#When you need to pass multiple arguments to a command but the original command doesn't handle multiple inputs well, xargs steps in to process them efficiently.

# xargs taking hello as input and passing it to echo
echo "Hello" | xargs echo

# word counting using xargs, wc returns # of lines, words, and bytes in a file and file name is passed to xargs. i.e. 3 6 45 ./tr-output.txt
find . -type f -name "tr-output.txt" | xargs wc

# executing a command with limited number of arguments at a time
echo "${FILE1} ${FILE2} ${FILE3}" | xargs -n 2 echo

# find all files and remove
# find . -type f -name "*.csv" | xargs rm
# using -print0 flag Outputs filenames separated by a null character (\0) instead of a newline and xargs -0 reads null-separated filenames to avoid errors with spaces.
find . -type f -name "*.ts" -print0 | xargs -0 rm
# this will print rm before executing, it will help in debugging whether filename are passed or not
find . -type f -name "*.ts" -print0 | xargs -0 rm

# Fetches each URL listed in urls.txt using curl.
cat urls.txt | xargs -n 1 curl -O
# Downloads files in parallel with 4 simultaneous processes (-P 4).
cat list.txt | xargs -n 1 -P 4 curl -O

# find all .sh files and make them executable
find . -name "*.sh" | xargs chmod +x

# find all .txt files and compress them as backup.tar.gz
find . -name "*.txt" | xargs tar -czf backup.tar.gz

# find all .jpg files and move them to Pictures/; here {} acts as a placeholder for each found file and -I {} replaces {} with each filename found, ensuring correct handling of spaces and special characters. Without -I, xargs might struggle with filenames containing spaces or special characters
find . -name "*.jpg" | xargs -I {} mv {} ~/Pictures/

# This command copies all .txt files in the current directory and creates backup versions with a .bak extension.
# cp {} {}.bak copies each file and appends .bak to the filename.
# -maxdepth 1 ensures it only looks in the current directory (not subdirectories).
# -print0 outputs filenames separated by null characters (\0), preventing issues with spaces or special characters.
find . -maxdepth 1 -name "*.txt" -print0 | xargs -0 -I {} cp {} {}.bak

